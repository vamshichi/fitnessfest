"use server"

import { PrismaClient } from "@prisma/client"
import nodemailer from "nodemailer"

const prisma = new PrismaClient()

// Update the submitContactForm function to handle errors better
export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const type = formData.get("type") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Additional fields based on form type
    let additionalData = {}

    if (type === "speaker") {
      additionalData = {
        talkTitle: formData.get("talkTitle") as string,
        expertise: formData.get("expertise") as string,
        previousTalks: formData.get("previousTalks") as string,
      }
    } else if (type === "sponsor") {
      additionalData = {
        company: formData.get("company") as string,
        website: formData.get("website") as string,
        sponsorshipLevel: formData.get("sponsorshipLevel") as string,
      }
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        type,
        name,
        email,
        subject,
        message,
        additionalData: JSON.stringify(additionalData),
        createdAt: new Date(),
      },
    })

    // Try to send email notification, but don't fail if it doesn't work
    const emailSent = await sendEmailNotification({
      type,
      name,
      email,
      subject,
      message,
      additionalData,
    })

    return {
      success: true,
      id: contact.id,
      emailSent,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit your message" }
  }
}

// Update the sendEmailNotification function to use the correct SMTP settings
async function sendEmailNotification(data: any) {
  // Configure email transport with the correct maxpo.ae settings
  const transporter = nodemailer.createTransport({
    host: "maxpo.ae", // Changed from smtp.maxpo.ae to maxpo.ae
    port: 465, // Using the secure port 465
    secure: true, // Set to true for port 465
    auth: {
      user: "vamshi@maxpo.ae",
      pass: process.env.SMTP_PASSWORD || "py8Eb%351",
    },
    tls: {
      // Add this to avoid certificate verification issues
      rejectUnauthorized: false,
    },
  })

  // Determine recipient email based on inquiry type
  let toEmail = "vamshi@maxpo.ae" // default
  let emailSubject = `[Maxpo] ${data.subject}`

  if (data.type === "speaker") {
    toEmail = "vamshi@maxpo.ae"
    emailSubject = `[Maxpo] Speaker Application: ${data.subject}`
  } else if (data.type === "sponsor") {
    toEmail = "vamshi@maxpo.ae"
    emailSubject = `[Maxpo] Sponsorship Inquiry: ${data.subject}`
  }

  // Create email content based on form type
  let emailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `

  if (data.type === "speaker") {
    emailContent += `
      <h3>Speaker Application Details</h3>
      <p><strong>Talk Title:</strong> ${data.additionalData.talkTitle || "N/A"}</p>
      <p><strong>Areas of Expertise:</strong> ${data.additionalData.expertise || "N/A"}</p>
      <p><strong>Previous Speaking Experience:</strong> ${data.additionalData.previousTalks || "N/A"}</p>
    `
  } else if (data.type === "sponsor") {
    emailContent += `
      <h3>Sponsorship Details</h3>
      <p><strong>Company:</strong> ${data.additionalData.company || "N/A"}</p>
      <p><strong>Website:</strong> ${data.additionalData.website || "N/A"}</p>
      <p><strong>Sponsorship Level Interest:</strong> ${data.additionalData.sponsorshipLevel || "N/A"}</p>
    `
  }

  try {
    // Send email
    await transporter.sendMail({
      from: `"Maxpo Contact Form" <vamshi@maxpo.ae>`,
      to: toEmail,
      subject: emailSubject,
      html: emailContent,
    })

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"Maxpo" <vamshi@maxpo.ae>`,
      to: data.email,
      subject: "Thank you for contacting Maxpo",
      html: `
        <h2>Thank you for contacting Maxpo!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your ${data.type === "speaker" ? "speaker application" : data.type === "sponsor" ? "sponsorship inquiry" : "message"}. Our team will review your submission and get back to you as soon as possible.</p>
        <p>Best regards,<br>The Maxpo Team</p>
      `,
    })

    return true
  } catch (error) {
    console.error("Email sending error:", error)
    // Don't throw the error, just log it - this way the form submission will still work
    // even if email sending fails
    return false
  }
}

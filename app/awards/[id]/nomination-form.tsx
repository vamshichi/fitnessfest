"use client"

import type React from "react"

import { useState } from "react"
import { Send, User, Building, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Award } from "lucide-react"

interface NominationFormProps {
  awardTitle: string
}

export default function NominationForm({ awardTitle }: NominationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nomineeName: "",
    nomineeEmail: "",
    nomineePhone: "",
    nomineeOrganization: "",
    nominatorName: "",
    nominatorEmail: "",
    nominatorPhone: "",
    nominatorOrganization: "",
    relationship: "",
    nominationReason: "",
    achievements: "",
    supportingDocuments: null as File | null,
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Nomination submitted successfully! You will receive a confirmation email shortly.")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      nomineeName: "",
      nomineeEmail: "",
      nomineePhone: "",
      nomineeOrganization: "",
      nominatorName: "",
      nominatorEmail: "",
      nominatorPhone: "",
      nominatorOrganization: "",
      relationship: "",
      nominationReason: "",
      achievements: "",
      supportingDocuments: null,
      agreeToTerms: false,
    })
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className=" text-black">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Send className="h-10 w-6 " />
          Submit Nomination for {awardTitle}
        </CardTitle>
        <CardDescription className="text-black/90">
          Fill out the form below to nominate a deserving candidate for this award.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nominee Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5" />
              Nominee Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nomineeName">Full Name *</Label>
                <Input
                  id="nomineeName"
                  value={formData.nomineeName}
                  onChange={(e) => handleInputChange("nomineeName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomineeEmail">Email Address *</Label>
                <Input
                  id="nomineeEmail"
                  type="email"
                  value={formData.nomineeEmail}
                  onChange={(e) => handleInputChange("nomineeEmail", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomineePhone">Phone Number</Label>
                <Input
                  id="nomineePhone"
                  type="tel"
                  value={formData.nomineePhone}
                  onChange={(e) => handleInputChange("nomineePhone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomineeOrganization">Organization *</Label>
                <Input
                  id="nomineeOrganization"
                  value={formData.nomineeOrganization}
                  onChange={(e) => handleInputChange("nomineeOrganization", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Nominator Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building className="h-5 w-5" />
              Your Information (Nominator)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nominatorName">Your Full Name *</Label>
                <Input
                  id="nominatorName"
                  value={formData.nominatorName}
                  onChange={(e) => handleInputChange("nominatorName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nominatorEmail">Your Email Address *</Label>
                <Input
                  id="nominatorEmail"
                  type="email"
                  value={formData.nominatorEmail}
                  onChange={(e) => handleInputChange("nominatorEmail", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nominatorPhone">Your Phone Number</Label>
                <Input
                  id="nominatorPhone"
                  type="tel"
                  value={formData.nominatorPhone}
                  onChange={(e) => handleInputChange("nominatorPhone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nominatorOrganization">Your Organization</Label>
                <Input
                  id="nominatorOrganization"
                  value={formData.nominatorOrganization}
                  onChange={(e) => handleInputChange("nominatorOrganization", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship to Nominee *</Label>
              <Select onValueChange={(value) => handleInputChange("relationship", value)}>
                <SelectTrigger id="relationship">
                  <SelectValue placeholder="Select your relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colleague">Colleague</SelectItem>
                  <SelectItem value="supervisor">Supervisor</SelectItem>
                  <SelectItem value="subordinate">Subordinate</SelectItem>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="partner">Business Partner</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Nomination Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Nomination Details
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nominationReason">Why does this person deserve this award? *</Label>
                <Textarea
                  id="nominationReason"
                  placeholder="Describe why you believe this person should receive this award..."
                  value={formData.nominationReason}
                  onChange={(e) => handleInputChange("nominationReason", e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="achievements">Key Achievements and Contributions *</Label>
                <Textarea
                  id="achievements"
                  placeholder="List specific achievements, projects, or contributions that make this nominee stand out..."
                  value={formData.achievements}
                  onChange={(e) => handleInputChange("achievements", e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportingDocuments">Supporting Documents (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <Input
                    id="supportingDocuments"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => handleInputChange("supportingDocuments", e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <Label htmlFor="supportingDocuments" className="cursor-pointer">
                    <span className="text-sm text-gray-600">
                      Click to upload supporting documents (PDF, DOC, or images)
                    </span>
                  </Label>
                  {formData.supportingDocuments && (
                    <p className="text-sm text-green-600 mt-2">File selected: {formData.supportingDocuments.name}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                I agree to the terms and conditions and confirm that all information provided is accurate. I understand
                that false information may disqualify the nomination. *
              </Label>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || !formData.agreeToTerms}
              className="w-full bg-gradient-to-r from-[#fa0368] to-[#dc5044] hover:from-[#dc5044] hover:to-[#fa0368] text-white py-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Submit Nomination
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

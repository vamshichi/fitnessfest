import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = await hash("admin123", 10)

  const user = await prisma.user.upsert({
    where: { email: "admin@fitnessfest.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@fitnessfest.com",
      password,
      role: "admin",
    },
  })

  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

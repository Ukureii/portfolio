const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const allGraines = await prisma.graines.findMany()
    console.log(allGraines)
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
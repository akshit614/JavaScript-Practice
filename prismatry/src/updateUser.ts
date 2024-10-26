import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UpdateParams {
    firstName : string, 
    lastName ?: string
}

async function updateUser(username : string, {firstName, lastName} : UpdateParams) {
    
    await prisma.user.update({
        where: {
          username: username,
        },
        data: {
          firstName,
          lastName
        }
      })
}

updateUser("Div@123", 
    {firstName : "Divyanshu" }
).then(()=>{
    console.log("User updated");
}).catch((e) => {
    console.error(e);
}).finally(async () => {
    await prisma.$disconnect()
})


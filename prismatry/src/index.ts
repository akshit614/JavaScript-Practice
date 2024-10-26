import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function  insertIntoUser(username : string, firstName:string, lastName : string, password  : string) {
    const res = await prisma.user.create ({
        data : {
              username,
              firstName,
              lastName,
              password
        },
        select : {
            id : true
        }
    })
    console.log(res);  
}

insertIntoUser("Div@123", "Div", "code", "postgres");
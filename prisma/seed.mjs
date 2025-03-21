import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

await prismaClient.tag.createMany({
    data:
        [{
            tittle: 'reactjs'
        },
        {
            tittle: 'angularjs'
        }]
})
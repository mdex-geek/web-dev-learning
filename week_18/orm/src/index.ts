import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


async function createUser() {
    // console.log("get inside the function")
    const user = await client.user.findFirst(
        {
            where:{
                id: 1,
            },
            include:{
                todos:true
            }
        }
    )
    console.log(user);
}
await createUser();
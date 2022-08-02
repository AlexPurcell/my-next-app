import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
// const messages: Array<any> = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method === "POST") {
    //IN MEMORY
    // const name = req.body.name;
    // const userID = req.body.number;
    // messages.push(name, userID);
    // console.log("In memory messages:", messages);

    // await prisma.messages.create({messages})

    console.log(req.body)

    const newMessage = await prisma.messages.create({
        data: {
            name: req.body.name,
            number: req.body.number
        }
    })

    res.status(201).json({ messageObj: newMessage });

    }

}
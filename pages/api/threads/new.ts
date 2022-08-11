import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

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

    const newMessage = await prisma.featureRequest.create({
        data: {
            name: req.body.name,
            request: req.body.request
        },

    })

    console.log("Data: ", newMessage)




    res.status(201).json({ messageObj: newMessage });

    }

}
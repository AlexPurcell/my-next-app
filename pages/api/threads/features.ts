import type {
  NextApiRequest,
  NextApiResponse
} from "next";
import prisma from "../../../prisma/client";
import React, {
  useState,
  useEffect
} from "react";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse < any > ,
) {


  const posts = await prisma.featureRequest.findMany({
    where: {
      submitted: true,
    },
  })

  res.status(201).json(
    posts
  );

}
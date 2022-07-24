import type { NextApiRequest, NextApiResponse } from 'next'

const threads: Array<any> = []

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
 if (req.method === 'POST'){
     const threadName = req.body.data.name
     const userID = req.body.data.iduser
     const newThread = {
        name: {threadName},
        iduser: {userID}
    }
    threads.push(newThread)
    res.status(201).json({newThread})
    console.log(newThread)
 }

}

import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
   res.json({ pong: true })
}

export default handler

// Forma 02 
/*import { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
   res.json({ pong: true })
}*/
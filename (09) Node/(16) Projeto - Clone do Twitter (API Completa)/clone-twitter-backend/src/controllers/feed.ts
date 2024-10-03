import { Response } from "express";
import { ExtendedRequest } from "../../types/extended-request";
import { feedSchema } from "../schemas/feed";
import { getUserFollowing } from "../services/user";
import { findTweetFeed } from "../services/tweet";

export const getFeed = async(req: ExtendedRequest, res: Response) => {
   const safeData = feedSchema.safeParse(req.query)
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   let perPage = 2
   let currentPage = safeData.data.page ?? 0

   const following = await getUserFollowing(req.userSlug as string)
   const tweets = await findTweetFeed(following, currentPage, perPage)

   console.log(`Following ${following}`)
   console.log(`Tweets ${JSON.stringify(tweets)}`)

   res.json({ tweets, page: currentPage })
}

// James => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbHVnIjoiamFtZXMiLCJpYXQiOjE3Mjc5MTUyMjh9.mnuRZmMcMJ_4h2vz3OLSsQUGPDdKB_ye88oQ4zDXQx4
// Nick => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbHVnIjoibmljayIsImlhdCI6MTcyNzkxNTQ5Mn0.3klPT3pAn_B6aa3yIbwYoVpIcnuITRuR4IPC3R55Yho
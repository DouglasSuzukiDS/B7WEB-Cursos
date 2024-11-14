import { ExtendedRequest } from "../../types/extended-request";
import { Response } from "express";
import { checkIfFollow, findUserBySlug, follow, getUserFollowersCount, getUserFollowingCount, getUserTweetCount, unfollow, updateUserInfo, updateUserNewAvatar } from "../services/user";
import { userTweetsSchema } from "../schemas/user-tweets";
import { findTweetsByUser } from "../services/tweet";
import { updateUseSchema } from "../schemas/update-user";
import { userAvatarSchema } from "../schemas/user-avatar";
import { userCoverSchema } from "../schemas/user-cover";

export const getUser = async(req: ExtendedRequest, res: Response) => {
   const { slug } = req.params

   const user = await findUserBySlug(slug)
   if(!user) return res.json({ error: 'Usuário inexistente' })

      const followingCount = await getUserFollowingCount(user.slug)
      const followersCount = await getUserFollowersCount(user.slug)
      const tweetCount = await getUserTweetCount(user.slug)

   res.json({ user, followingCount, followersCount, tweetCount })
}

export const getUserTweets = async(req: ExtendedRequest, res: Response) => { 
   const { slug } = req.params

   const safeData = userTweetsSchema.safeParse(req.query)
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   let perPage = 2
   let currentPage = safeData.data.page ?? 0

   const tweets = await findTweetsByUser(
      slug,
      currentPage,
      perPage
   )

   res.json({ tweets, page: currentPage })
}

export const followToggle = async(req: ExtendedRequest, res: Response) => {
   const { slug } = req.params

   const me = req.userSlug as string

   const hasUserTobeFollowed = await findUserBySlug(slug)
   if(!hasUserTobeFollowed) return res.json({ error: 'Usuário inexistente' })

   const follows = await checkIfFollow(me, slug)
   if(!follows) {
      await follow(me, slug)
      res.json({ followind: true })
   } else {
      await unfollow(me, slug)
      res.json({ following: false })
   }
}

export const updateUser = async(req: ExtendedRequest, res: Response) => {
   const safeData = updateUseSchema.safeParse(req.body)
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   await updateUserInfo(
      req.userSlug as string,
      safeData.data
   )

   res.json({  })
} 

// Controllers implementados por mim
export const updateUserAvatar = async(req: ExtendedRequest, res: Response) => {
   const safeData = userAvatarSchema.safeParse(req.body) // Aqui faz a verificação se os dados são compativeis com o Schema
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   await updateUserNewAvatar(
      req.userSlug as string,
      safeData.data.newAvatar as string// Assumindo que o campo avatarUrl é o nome do campo do schema userAvatarSchema que contém a URL do avatar.
   )

   res.json({ newAvatar: safeData.data })
}

export const updateUserCover = async(req: ExtendedRequest, res: Response) => {
   const safeData = userCoverSchema.safeParse(req.body) // Aqui faz a verificação se os dados são compativeis com o Schema
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   await updateUserNewAvatar(
      req.userSlug as string,
      safeData.data.newCover
   )

   res.json({ newAvatar: safeData.data })
}
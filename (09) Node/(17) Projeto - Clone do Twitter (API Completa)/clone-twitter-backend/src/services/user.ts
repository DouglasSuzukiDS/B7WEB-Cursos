import { Prisma } from "@prisma/client"
import { prisma } from "../utils/prisma"
import { getPublicURL } from "../utils/url"

export const findUserByEmail = async(email: string) => {
   const user = await prisma.user.findFirst({
      where: { email },
   })

   if(user) {
      return {
         ...user,
         avatar: getPublicURL(user.avatar),
         cover: getPublicURL(user.cover)
      }
   }

   return null
}

export const findUserBySlug = async(slug: string) => {
   const user = await prisma.user.findFirst({
      select: {
         avatar: true,
         cover: true,
         slug: true,
         name: true,
         bio: true,
         link: true
      },
      where: { slug },
   })

   if(user) {
      return {
         ...user,
         avatar: getPublicURL(user.avatar),
         cover: getPublicURL(user.cover)
      }
   }

   return null 
}

export const createUser = async(data: Prisma.UserCreateInput) => { // Pega os type dos dados informados na criação dos Models
   const newUser = await prisma.user.create({ data })

   return {
      ...newUser,
      avatar: getPublicURL(newUser.avatar),
      cover: getPublicURL(newUser.cover)
   }
}

export const getUserFollowingCount = async(slug: string) => {
   const count = await prisma.follow.count({
      where: { user1Slug: slug },
   })

   return count
}

export const getUserFollowersCount = async(slug: string) => {
   const count = await prisma.follow.count({
      where: { user2Slug: slug },
   })

   return count
}

export const getUserTweetCount = async(slug: string) => {
   const count = await prisma.tweet.count({
      where: { userSlug: slug },
   })

   return count
}

export const checkIfFollow = async(user1Slug: string, user2Slug: string) => {
   const follows = await prisma.follow.findFirst({
      where: { user1Slug, user2Slug }
   })

   return follows ? true : false
}

export const follow = async(user1Slug: string, user2Slug: string) => {
   await prisma.follow.create({
      data: { user1Slug, user2Slug }
   })
}

export const unfollow = async(user1Slug: string, user2Slug: string) => {
   await prisma.follow.deleteMany({
      where: { user1Slug, user2Slug }
   })
}

export const updateUserInfo = async(slug: string, data: Prisma.UserUpdateInput) => {
   await prisma.user.update({
      where: { slug }, 
      data,
   })
}

export const getUserFollowing = async(slug: string) => {
   const following = []
   const reqFollow = await prisma.follow.findMany({
      select: { user2Slug: true },
      where: { user1Slug: slug },
   })
   console.log(`reqFollow: ${JSON.stringify(reqFollow)}`)

   for(let reqItem of reqFollow) {
      following.push(reqItem.user2Slug)
   }

   return following
}

export const getUserSuggestions = async(slug: string) => {
   const following = await getUserFollowing(slug)
   
   const followingPlusMe = [...following, slug]

   // Prisma.UserGetPayload<Prisma.UserDefaultArgs> // Pega todos os types dos campos da Table
   type Suggestion = Pick< // Faz a seleção dos itens que vocÇe deseja selecionar
      Prisma.UserGetPayload<Prisma.UserDefaultArgs>,
      "name"| "avatar" | "slug"
   >

   const suggestions: Suggestion[] = await prisma.$queryRaw`
      SELECT 
         name, avatar, slug
      FROM "User"
      WHERE
         slug NOT IN (${ followingPlusMe.join(',') })
      ORDER BY RANDOM()
      LIMIT 2`

   for(let sigIndex in suggestions) {
      suggestions[sigIndex].avatar = getPublicURL(suggestions[sigIndex].avatar)
   }

   return suggestions
}

// Services implementados por mim
export const updateUserNewAvatar = async(slug: string, newAvatar: string) => {
   await prisma.user.update({
      where: { slug },
      data: { 
         avatar: newAvatar,
      },
   })
}

export const updateUserNewCover = async(slug: string, newCover: string) => {
   await prisma.user.update({
      where: { slug },
      data: { 
         cover: newCover,
      },
   })
}
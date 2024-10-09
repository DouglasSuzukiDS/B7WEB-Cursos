import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
   id: 123,
   user: user,
   body: 'Banner do usuário',
   image: 'https://media.licdn.com/dms/image/v2/D4D16AQGaQ9DDVtPzyw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1709942479578?e=1733356800&v=beta&t=Fnn85UNqqRNWZWBu5Jdocvd7jsGvNXfFbek6J-LQH4U',
   likeCount: 523,
   commentsCount: 61,
   retweetsCount: 0,
   liked: true,
   retweeted: false,
   dataPost: new Date(2024, 8, 1, 10, 0, 0)
} 
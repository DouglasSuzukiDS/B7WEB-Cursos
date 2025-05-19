import { Router } from "express";
import * as pingController from "../controllers/ping";
import * as authController from "../controllers/auth";

export const mainRouter = Router()

mainRouter.get('/ping', pingController.ping)
// mainRouter.get('/privateping', pingController.privatePing)

mainRouter.post('/auth/signup', authController.signup)
mainRouter.post('/auth/signin', authController.signin)

// mainRouter.post('/tweet', tweetController.tweet)
// mainRouter.get('/tweet/:id', tweetController.tweetById)
// mainRouter.post('/tweet/:id/answers', tweetController.answersTweet)
// mainRouter.post('/tweet/:id/like', tweetController.likeTweet)

// mainRouter.get('/user/:slug', userController.user)
// mainRouter.get('/user/:slug/tweets', userController.userTweets)
// mainRouter.post('/user/:slug/follow', userController.userFollow)
// mainRouter.put('/user', userController.userInfo)
// mainRouter.put('/user/avatar', userController.userAvatar)
// mainRouter.put('/user/cover', userController.userCover)

// mainRouter.get('/feed', feedController.feed)
// mainRouter.get('/search', feedController.search)
// mainRouter.get('/trending', feedController.trending)
// mainRouter.get('/suggestions', feedController.suggestions)
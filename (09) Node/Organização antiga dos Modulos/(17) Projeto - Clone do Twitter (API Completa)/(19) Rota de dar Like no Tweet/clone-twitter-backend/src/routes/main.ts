import { Router } from "express";
import * as pingController from "../controllers/ping";
import * as authController from "../controllers/auth";
import * as tweetController from "../controllers/tweet";
import { verifyJWT } from "../utils/jwt";

export const mainRouter = Router()

mainRouter.get('/ping', pingController.ping)
mainRouter.get('/privateping', verifyJWT, pingController.privatePing)

mainRouter.post('/auth/signup', verifyJWT , authController.signup)
mainRouter.post('/auth/signin', authController.signin)

mainRouter.post('/tweet', verifyJWT ,tweetController.addTweet)
mainRouter.get('/tweet/:id', verifyJWT, tweetController.getTweet)
mainRouter.get('/tweet/:id/answers', verifyJWT, tweetController.getAnswers)
mainRouter.post('/tweet/:id/like', verifyJWT, tweetController.likeToggle)

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
import { RequestHandler } from 'express'
import { AppError } from '../utils/apperror'
import * as userService from '../services/user.service'

export const authMiddleware: RequestHandler = async (req, res, next) => {
   const notAuthorizedError = new AppError('Não autorizado', 401)
   const authHeader = req.headers.authorization

   if (!authHeader) return next(notAuthorizedError)

   const [scheme, token] = authHeader.split(' ')
   console.log(scheme, token)

   if (scheme !== 'Bearer' || !token) {
      return next(notAuthorizedError)
   }

   const user = await userService.validateToken(token)
   console.log(user)

   if (!user) return next(notAuthorizedError)

   req.user = user

   next()
}
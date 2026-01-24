import { RequestHandler } from "express";
import { createUserSchema, listUsersSchema, updateUserSchema, userIdSchema } from "../validators/user.validator";
import * as userService from '../services/user.service'
import { AppError } from "../utils/apperror";
import { saveAvatar } from "../services/file.service";

export const createUser: RequestHandler = async (req, res) => {
   const data = createUserSchema.parse(req.body)

   const user = await userService.createUser(data)

   res.status(201).json({ error: null, data: user })
}

export const listUsers: RequestHandler = async (req, res) => {
   const { offset, limit } = listUsersSchema.parse(req.query)
   const users = await userService.listUsers(offset, limit)

   res.status(200).json({ error: null, data: users })
}

export const getUser: RequestHandler = async (req, res) => {
   const { id } = userIdSchema.parse(req.params)
   const user = await userService.getUserByIdPublic(id)

   if (!user) throw new AppError('Usuário nção encontrado', 404)

   res.status(200).json({ error: null, data: user })
}

export const deleteUser: RequestHandler = async (req, res) => {
   const { id } = userIdSchema.parse(req.params)

   const deleteUser = await userService.deleteUser(id)

   if (!deleteUser) throw new AppError('Usuário não encontrado', 404)

   res.status(200).json({ error: null, data: null })
}

export const updateUser: RequestHandler = async (req, res) => {
   const { id } = userIdSchema.parse(req.params)
   const data = updateUserSchema.parse(req.body)

   // Handle avatar upload
   let avatarFileName: string | undefined

   if (req.file) {
      avatarFileName = await saveAvatar(req.file.buffer, req.file.originalname)
   }

   const updateData = { ...data }

   if (avatarFileName) {
      updateData.avatar = avatarFileName
   }

   const updatedUser = await userService.updateUser(id, updateData)

   res.status(200).json({ error: null, data: updatedUser })
}
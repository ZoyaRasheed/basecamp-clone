import express from 'express'
import {registerUser} from '../controllers/auth.controller.js'
import { validate } from '../middlewares/validator.middleware.js'
import { userRegisterValidator } from '../validators/index.js'
const router = express.Router()

router.post("/register",userRegisterValidator(),validate,registerUser)

export default router
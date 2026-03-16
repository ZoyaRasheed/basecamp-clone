import express from 'express'
import {registerUser, login, logoutUser} from '../controllers/auth.controller.js'
import { validate } from '../middlewares/validator.middleware.js'
import { userRegisterValidator, userLoginValidator } from '../validators/index.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
const router = express.Router()

router.post("/register",userRegisterValidator(),validate,registerUser)
router.post("/login",userLoginValidator(),validate,login)

//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
export default router
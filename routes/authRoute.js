import express from 'express';
import {
    registerController,
    loginController,
    testController,
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


//router object 
const router = express.Router()

//routing
//REGİSTER || METHOD POST
router.post('/register', registerController);


//logın || POST
router.post('/login',loginController)

//test Routes
router.get('/test',requireSignIn, isAdmin ,testController);

export default router;
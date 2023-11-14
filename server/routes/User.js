const express = require("express");
const router=express.Router();


const{login,
    signup,
    sendOtp,
    changePassword}=require("../controllers/Auth");

const{resetPasswordToken,resetPassword}= require("../controllers/ResetPassword");


const{auth}=require("../middlewares/auth");


router.post("/login",login);

router.post("/signup",signup);

router.post("/sendOtp",sendOtp);

router.post("/changePassword",auth,changePassword);

router.post("/reset-password-token",auth,resetPasswordToken);

router.post("/reset-password",auth,resetPassword);



module.exports=router;

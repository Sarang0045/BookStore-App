import User from "../model/user.model.js"
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpassword = await bcryptjs.hash(password,10);
        const newuser = new User({
            fullname: fullname,
            email : email,
            password : hashpassword,
        })
        await newuser.save();
        res.status(201).json({message:"User created success",
        user:{
            _id : newuser._id,
            fullname : newuser.fullname,
            email : newuser.email,
        }});
    }catch(err){
        console.log(err);
        res.status(400).json({message:"User already exixt"});
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password,user.password);
        if(!user || !ismatch){
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(201).json({message:"login successfull",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
        }});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"Internal server error"});
    }
}
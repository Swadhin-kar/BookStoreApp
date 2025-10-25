import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) =>{
    try {
        // console.log('Request body:', req.body);
        
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }

        const {fullname, email, password} = req.body;
        
        if (!fullname || !email || !password) {
            return res.status(400).json({ 
                message: "Missing required fields",
                required: ["fullname", "email", "password"],
                received: req.body 
            });
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashpassword = await bcryptjs.hash(password, 10);

        const newuser = await new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        })

        await newuser.save()
        res.status(201).json({message: "User registered successfully" , user:{
            _id:newuser._id,
            fullname:newuser.fullname,
            email:newuser.email
        }} )

    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export const login = async (req, res) =>{
    try {
        if(!req.body){
            return res.status(400).json({message:"Body is missing"})
        }

        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"Body is missing some parts"})
        }

        const user = await User.findOne({email})

        const isMatch = await bcryptjs.compare(password, user.password)

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"})
        }else{
            res.status(200).json({message:"Login successful", user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})

            
        }

    } catch (error) {
        console.log("Error is :", error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}
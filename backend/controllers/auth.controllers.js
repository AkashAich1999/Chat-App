import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req,res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password Don't Match."});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username Already Exists."});           
        }

        // Hash Password Here
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Invalid User Data"});
        }

    } catch (error) {
        console.log("Error in Signup Controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const login = (req,res) => {
    res.send("Login User");
};

export const logout = (req,res) => {
    res.send("Logout User");
};
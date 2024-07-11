const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Sign up
router.post("/signup", async (req, res) => {
    console.log("Sign up request received", req.body);
    try {
        const { email, username, password } = req.body;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt); 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ email, username, password: hashedPassword });
        await user.save();
        res.status(200).json({ message: "Sign Up Successful" }); 
    } catch (error) {
        console.error("Error during sign up:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login
router.post("/signin", async (req, res) => {
    console.log("Sign in request received", req.body);
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.log("User not found");
            return res.status(200).json({ message: "Please sign up first" });
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            console.log("Incorrect password");
            return res.status(200).json({ message: "Password is not correct" });
        }
        const { password, ...other } = user._doc; 
        console.log("User authenticated successfully", other);
        res.status(200).json({ user: { ...other } });
    } catch (error) {
        console.error("Error during sign in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;

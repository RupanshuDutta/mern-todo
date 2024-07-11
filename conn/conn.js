const mongoose = require("mongoose");

const conn = async(res,req) =>{
    try {
        await mongoose.connect("mongodb+srv://rupanshudutta555:qvvhV7MEFWLBXvIu@cluster0.fjeaoy6.mongodb.net/")
        .then(() => {
        console.log("Connected");
    })
    }
    catch (error) {
        res.status(400).json({
            message: "Not Connected"
        })
    }
}

conn()
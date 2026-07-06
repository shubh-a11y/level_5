import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => 
    {
        return res.status(200).json({"Hello Shubhang": "Welcome to level 5"});
    
    });

    app.get("/health",(req,res) =>
    {
        return res.status(200).json({"status": "ok"});
    })

    app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    });
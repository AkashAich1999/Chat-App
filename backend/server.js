import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req,res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World !!");
// });

// middlewares
app.use(express.json());  // to parse the incoming requests with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on PORT ${PORT}`)
});
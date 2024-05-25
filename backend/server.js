import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    // root route http://localhost:5000/
    res.send("Hello World !!");
});

// middlewares
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
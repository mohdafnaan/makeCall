import express from "express";
import dotenv from "dotenv";
dotenv.config();

// import database
import "./utils/dbConnect.js";
// import routes
import publicRoutes from "./controllers/public/public.js";
//import auth middleware
import authMiddleware from "./auth/auth.js";
//import private routes
import privateRoutes from "./controllers/private/private.js";


const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  try {
    res.status(200).json("Server is running");  
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
}
});

app.use("/private", privateRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
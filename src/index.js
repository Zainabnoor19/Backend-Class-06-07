import dns from 'dns'
dns.setServers(['8.8.8.8','1.1.1.1'])

import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import authroute from "./routes/AuthRoutes.js";

const app = express();

dotenv.config();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Successfully run"
  });
});

app.use("/api/v2/auth", authroute);

app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});
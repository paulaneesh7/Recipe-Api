import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import { router as recipeRouter } from "./router/recipe_routes.js";

const server = express();

// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}

// body-parser middleware
server.use(express.json());
server.use("/api/recipes", recipeRouter);
server.use(cors());

server.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

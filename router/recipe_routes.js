import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipe,
  replaceRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controller/recipe_controller.js";

const router = express.Router();

router
  .post("/", createRecipe)
  .get("/", getAllRecipes)
  .get("/:id", getRecipe)
  .put("/:id", replaceRecipe)
  .patch("/:id", updateRecipe)
  .delete("/:id", deleteRecipe);

export { router };

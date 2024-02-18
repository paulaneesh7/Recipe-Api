import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipe,
  replaceRecipe,
  updateRecipe,
  deleteRecipe,
  getLimitedRecipe,
  getRecipeById,
} from "../controller/recipe_controller.js";

const router = express.Router();
const key = process.env.KEY;

router
  .post(`/${key}`, createRecipe)
  .get("/", getRecipeById)
  // .get("/", getAllRecipes)
  .get("/limited", getLimitedRecipe)
  .get("/:id", getRecipe)
  .put(`/${key}/:id`, replaceRecipe)
  .patch(`/${key}/:id`, updateRecipe)
  .delete(`/${key}/:id`, deleteRecipe);

export { router };

import mongoose from "mongoose";
import { Recipe } from "../model/recipe_model.js";

const createRecipe = async (req, res, next) => {
  const newRecipe = new Recipe(req.body);

  try {
    const doc = await newRecipe.save();
    console.log(doc);
    return res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Failed to create a Recipe` });
  }
};

// To Read all the recipes
const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    if (!recipes || recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found." });
    }
    return res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to fetch recipes." });
  }
};

// To read Recipes by a certain limit (like 3 recipes only or 4)
const getLimitedRecipe = async (req, res, next) => {
  const { result } = req.query;
  const numOfRecipes = parseInt(result);

  // Check if result is a valid number
  if (isNaN(numOfRecipes) || numOfRecipes <= 0) {
    return res.status(400).json({
      message:
        "Invalid query parameter. Please provide a valid number greater than 0",
    });
  }

  try {
    // Fetch limited number of recipes from the database
    const recipes = await Recipe.find().limit(numOfRecipes);

    if (recipes.length === 0) {
      return res.status(404).json({
        message: "No recipes found",
      });
    }

    return res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to fetch recipes",
    });
  }
};

// To Read single recipe
const getRecipe = async (req, res, next) => {
  const id = req.params.id;

  // Validate if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid recipe id." });
  }

  let recipe;
  try {
    recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "No recipe found with that id." });
    }
    return res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to fetch recipe." });
  }
};

// Retrieve recipe by id through query string
const getRecipeById = async (req, res, next) => {
  const { id } = req.query;

  // // Check if the ID is provided
  // if (!id) {
  //   return res.status(400).json({ message: "Recipe ID is required" });
  // }

  if (id) {
    // Find the recipe by ID
    try {
      const recipe = await Recipe.findById(id);

      // Check if the recipe doesn't exists
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }

      // Return the recipe
      return res.status(200).json(recipe);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Failed to get recipe" });
    }
  } else {
    return getAllRecipes(req, res, next);
  }
};

// To replace anything in any particular Recipe
const replaceRecipe = async (req, res, next) => {
  const id = req.params.id;
  let recipe;

  try {
    // Validate input
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid data for updating recipe." });
    }

    // Update the recipe
    recipe = await Recipe.findOneAndReplace({ _id: id }, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update recipe." });
  }
};

// To update anything in any particular Recipe
const updateRecipe = async (req, res, next) => {
  const id = req.params.id;
  let recipe;

  try {
    recipe = await Recipe.findByIdAndUpdate({ _id: id }, req.body, {
      returnDocument: "after",
    });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found." });
    }

    res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update recipe." });
  }
};

// To delete a particular Recipe
const deleteRecipe = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete({ _id: id });

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found." });
    }

    return res.status(200).json(deletedRecipe);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to delete recipe." });
  }
};

export {
  createRecipe,
  getAllRecipes,
  getLimitedRecipe,
  getRecipe,
  getRecipeById,
  replaceRecipe,
  updateRecipe,
  deleteRecipe,
};

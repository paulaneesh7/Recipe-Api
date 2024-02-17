import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  preparationTime: { type: Number, required: true },
  cookingTime: { type: Number, required: true, min: 0 },
  servings: { type: Number },
  difficulty: { type: String, required: true },
  cuisine: { type: String, required: true },
  calories: { type: Number },
  tags: { type: [String], required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
  mealType: { type: [String], required: true },
});

// model
export const Recipe = mongoose.model("Recipe", recipeSchema);

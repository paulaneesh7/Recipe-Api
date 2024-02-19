# Recipe API Documentation

Welcome to the Recipe API! This API allows you to retrieve recipes from a database. Below is the documentation to help you understand how to use the API effectively.

## Base URL

The base URL for the API is `http://localhost:8080`. Make sure to prefix all endpoint paths with this base URL.


## Endpoints

### 1. Get All Recipes

- **Endpoint:** `/api/recipes`
- **Method:** `GET`
- **Response:**
  - Success: Returns an array of recipe objects.
  - Failure: Returns an error message.

### 2. Get Recipe by ID

- **Endpoint:** `/api/recipes/:id` or `/api/recipes?id=${id}`
- **Method:** `GET`
- **Parameters:**
  - `id` (required): ID of the recipe to retrieve.
- **Response:**
  - Success: Returns a single recipe object.
  - Failure: Returns an error message.

### 3. Add New Recipe

- **Endpoint:** `/api/recipes/${key}`
- **Method:** `POST`
- **Parameter**: 
  - `key` (required): Key for secure access.
- **Data requirement:**
  - `name` (required): Name of the recipe.
  - `ingredients` (required): Array **(String)** of ingredients for the recipe.
  - `instructions` (required): Array **(String)** of instructions for the recipe.
  - `preparationTime` (required): Preparation time for the recipe (in minutes).
  - `cookingTime` (required): Cooking time for the recipe (in minutes).
  - `servings` (optional): Number of servings the recipe makes.
  - `difficulty` (required): Difficulty level of the recipe (e.g., "easy", "medium", "hard").
  - `cuisine` (required): Cuisine type of the recipe.
  - `calories` (optional): Number of calories per serving.
  - `tags` (required): Array **(String)** of tags for the recipe.
  - `image` (optional): URL of an image for the recipe.
  - `rating` (required): Rating of the recipe (from 1 to 5).
  - `reviewCount` (required): Number of reviews for the recipe.
  - `mealType` (required): Type of meal (e.g., "breakfast", "lunch", "dinner", "snack").
  
- **Response:**
  - Success: Returns the newly added recipe.
  - Failure: Returns an error message.


### 4. Replace Recipe

- **Endpoint:** `/api/recipes/${key}/:id`
- **Method:** `PUT`
- **Parameters:**
  - `id` (required): ID of the recipe to replace.
  - `key` (required): Key for secure access.
- **Response:**
  - Success: Returns the replaced recipe.
  - Failure: Returns an error message.


### 5. Update Recipe

- **Endpoint:** `/api/recipes/${key}/:id`
- **Method:** `PATCH`
- **Parameters:**
  - `id` (required): ID of the recipe to update.
  - `key` (required): Key for secure access.
- **Response:**
  - Success: Returns the updated recipe.
  - Failure: Returns an error message.


### 6. Delete Recipe

- **Endpoint:** `/api/recipes/${key}/:id`
- **Method:** `DELETE`
- **Parameters:**
  - `id` (required): ID of the recipe to delete.
  - `key` (required): Key for secure access.
- **Response:**
  - Success: Returns the deleted recipe.
  - Failure: Returns an error message.


## Example Usage

### Fetch All Recipes

```bash
curl http://localhost:8080/api/recipes
```

### Fetch a Recipe by ID

```bash
curl http://localhost:8080/api/recipes/42

curl http://localhost:8080/api/recipes?id=42
```


### Add a New Recipe

```bash
curl  http://localhost:8080/api/recipes/${key}
```

`Here id = 42`
### Replace a Recipe

```bash
curl http://localhost:8080/api/recipes/${key}/42
```


### Update a Recipe

```bash
curl http://localhost:8080/api/recipes/${key}/42
```


### Delete a Recipe

```bash
curl http://localhost:8080/api/recipes/${key}/42
```


## Notes
Feel free to experiment with the API and integrate it into your projects. If you encounter any issues or have questions, please refer to the [GitHub repository](https://github.com/paulaneesh7/Recipe-Api) or open an [issue](https://github.com/paulaneesh7/Recipe-Api/issues). 😀



### Security Note
  
For the **key** parameter, you can contact me to get the key for `adding` , `replacing` , `updating` and `deleting` recipes.


## Contact with me
- 💬 Feel free to ask for any help in any of the above things, I will definitely try to help.
- 📫 How to reach me: Connect with me on [mail](mailto:aneesh16117@gmail.com) or on [github](https://github.com/paulaneesh7).

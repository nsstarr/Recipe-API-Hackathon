import recipes from "../libs/recipes.js";

import express from "express";
const recipesRouter = express.Router();

// GET ALL RECIPES
export function getRecipes() { 
return recipes;
}


// GET A RECIPE BY ID
export function getRecipeByID(n) { 
    let searchedRecipe = {}
    for (let i=0; i < recipes.length; i++) {
       if (Number(n) === recipes[i].id) {
       searchedRecipe = recipes[i]
       return searchedRecipe
       }
     }
   
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {
    const body = req.body; 
    recipes.push(body);
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {
    recipesRouter.post(`/`, function(req, res) {
    const body = req.body; 
    recipes.push(body);
    const responseObject = {
      sucess: true,
      payload: recipes} 
      res.json(responseObject)
    }
    )
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
}


/* PLAN
-  bring all the code from router into this file 
-  import each function into router file 
 */
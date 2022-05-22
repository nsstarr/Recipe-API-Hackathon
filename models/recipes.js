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
    recipes.push(newRecipe);
    return newRecipe;
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {
  let searchedRecipe = {} 
  for (let i = 0; i < recipes.length; i++) {        
    if (Number(id) === recipes[i].id) {            
        recipes[i] = updatedRecipe;           
        console.log(recipes[i])           
        break;   
       }   
       return recipes[i];
}}

// DELETE A RECIPE BY ID
// export function deleteRecipeByID(id) {
// }


/* PLAN
-  bring all the code from router into this file 
-  import each function into router file 
*/
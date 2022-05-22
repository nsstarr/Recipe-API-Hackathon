//Write your router code here!
import express from "express";
const recipesRouter = express.Router();


//get
import {getRecipes} from "../models/recipes.js"

recipesRouter.get("/", function (req, res) {
  const recipes = getRecipes()
  const responseObject = {success: true, payload: recipes}
  res.json(responseObject)
})


//get by id
import {getRecipeByID} from "../models/recipes.js"

recipesRouter.get("/:id", function(req, res) {
     let id = req.params.id 
     const searchedRecipe = getRecipeByID(id)
     const responseObject = {success: true, payload: searchedRecipe}
     res.json(responseObject)
     }
 )

//post/create 

import {createRecipe} from "../models/recipes.js"

 recipesRouter.post(`/:id`, function(req, res) {
    let body = req.body;
    const newRecipe = createRecipe(body);
    const responseObject = {
      success: true,
      payload: newRecipe} 
      res.json(responseObject)
 }
 )

 //put/update
import {updateRecipeByID} from '../models/recipes.js'

 recipesRouter.put('/:id', function(req, res) {    
     const id = req.params.id;    
     const body = req.body;
     let updatedRecipe = updateRecipeByID(id, body);            
         const responseObject = {
             success: true, 
             payload: updatedRecipe
            }        
            res.json(responseObject)  
        }
        )



//delete
 recipesRouter.delete('/:id', function (req, res) {
    const id = req.params.id;
    let deletedRecipe = {}
    for (let i = 0; i < recipes.length; i++) {
      if (Number(id) === recipes[i].id) {
       deletedRecipe = recipes.splice(recipes[i])
       break}  }
      const responseObject = {success: true, payload: deletedRecipe}
      res.json(responseObject)
      }
    )

export default recipesRouter; 









// recipesRouter.use("/",getRecipes())

// import {getRecipeByID} from "../models/recipes.js"

// recipesRouter.use(":/id",getRecipeByID())

// import {createRecipe} from "../models/recipes.js"

// recipesRouter.use("/",createRecipe())

// import {updateRecipeByID} from "../models/recipes.js"

// recipesRouter.use(":/if",updateRecipeByID())

// import {deleteRecipeByID} from "../models/recipes.js"

// recipesRouter.use(":/id",deleteRecipeByID())




/*
  - update our recipe in postman 
  - we're not adding another item to the array -> XXXX array.push 
  - use id of the recipe
  - need a for loop to find correct id;
  - delete object that matches id;
  - replace with updated recipe
   */

 

  /*
  - Iterate through the loop to find an id of the recipe we want to remove
  - Use splice method to remove an array item with a matched id 
  - Update responseObject
  - No need to use express.json() to delete requests
  */

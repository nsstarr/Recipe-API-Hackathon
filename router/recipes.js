//Write your router code here!
import express from "express";
const recipesRouter = express.Router();

//import recipes from '../libs/recipes.js';

let express = express()

express.use(express.json()



import {getRecipes} from "../models/recipes.js"

recipesRouter.use("/",getRecipes())

import {getRecipeByID} from "../models/recipes.js"

recipesRouter.use(":/id",getRecipeByID())

import {createRecipe} from "../models/recipes.js"

recipesRouter.use("/",createRecipe())

import {updateRecipeByID} from "../models/recipes.js"

recipesRouter.use(":/if",updateRecipeByID())

import {deleteRecipeByID} from "../models/recipes.js"

recipesRouter.use(":/id",deleteRecipeByID())




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

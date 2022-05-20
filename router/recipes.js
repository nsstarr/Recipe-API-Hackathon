//Write your router code here!
import express from "express";
const recipesRouter = express.Router();

import recipes from '../libs/recipes.js';


recipesRouter.get("/", function (req, res){
    const responseObject = {success: true, payload: recipes}
    res.json(responseObject)
}
)

export default recipesRouter;

recipesRouter.get("/:id", function(req, res) {
    const id = req.params.id 
    let searchedRecipe = {}
    for (let i=0; i < recipes.length; i++) {
        if (Number(id) === recipes[i].id) {
          searchedRecipe = recipes[i]
        }
      }
      const responseObject = {success: true, payload: searchedRecipe}
        res.json(responseObject)
    
})

recipesRouter.post(`/`, function(req, res) {
  const body = req.body; 
  recipes.push(body);
  const responseObject = {
    sucess: true,
    payload: recipes} 
    res.json(responseObject)
  })


  /*
  - update our recipe in postman 
  - we're not adding another item to the array -> XXXX array.push 
  - use id of the recipe
  - need a for loop to find correct id;
  - delete object that matches id;
  - replace with updated recipe
   */

  recipesRouter.put('/:id', function(req, res) {
    const id = req.params.id;
    console.log(id)
    const body = req.body;
    console.log(body)
    let searchedRecipe = {}
    console.log(searchedRecipe)
    for (let i = 0; i < recipes.length; i++) {
        if (Number(id) === recipes[i].id) {
            recipes[i] = body
            searchedRecipe = recipes[i]
            break
        }
    }
    console.log(recipes)
        const responseObject = {success: true, payload: searchedRecipe}
        res.json(responseObject)
  })
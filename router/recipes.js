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
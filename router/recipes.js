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

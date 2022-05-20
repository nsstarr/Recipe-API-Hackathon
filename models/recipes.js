import recipes from "../libs/recipes.js";

// GET ALL RECIPES
export function getRecipes() { 
return recipes;
}


// GET A RECIPE BY ID
export function getRecipeByID(id) { 
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
        }
    )
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {
    recipesRouter.post(`/`, function(req, res) {
       const body = req.body; 
       recipes.push(body);
       const responseObject = {
         success: true,
         payload: recipes} 
         res.json(responseObject)
    }
    )
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
}


/* PLAN
-  bring all the code from router into this file 
-  import each function into router file 
 */
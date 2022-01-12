const recipe = require('../models/recipeModels');

const recipeController = {};

recipeController.addRecipe = async (req, res, next) => {
  
  const ingredient = req.body.ingredient;
  const label = req.body.recipe.label;
  const url = req.body.recipe.url;
  const img = req.body.recipe.image;
  const thumbnail = req.body.recipe.images.THUMBNAIL.url;
  const calories = Math.floor(req.body.recipe.calories);
  const totalTime = req.body.recipe.totalTime;

  try {
    
    const result = await recipe.create({ingredient, label, url, img, thumbnail, calories, totalTime});
    console.log("result after creating doc", result);
    if (result) res.locals.result = result;
    return next();
  }
  catch (err) {
    console.log(err);
    return next({log: "Document could not be created in the DB"});
  }
}

recipeController.getRecipes = async (req, res, next) => {

  try {
    const data = await recipe.find({});
    res.locals.recipes = data;
    return next();
  }
  catch (err) {
    console.log(err);
    return next({log: "Couldn't find documents in the DB"})
  }
  
}

module.exports = recipeController;

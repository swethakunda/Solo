const recipe = require('../models/recipeModels');

const recipeController = {};

recipeController.addRecipe = async (req, res, next) => {
  
  const data = await recipe.findOne({});

  console.log('ZZZZZZ', data );

  return next();

}

recipeController.getRecipes = async (req, res, next) => {
  const data = await recipe.find({});
  res.locals.recipes = data;
  return next();
}

module.exports = recipeController;

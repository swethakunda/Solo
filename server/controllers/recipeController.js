const recipe = require('../models/recipeModels');
const meals = require('../models/mealPlannerModels');

const recipeController = {};


// add a recipe
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

// get all recipes
recipeController.getRecipes = async (req, res, next) => {
  try {
    const data = await recipe.find({});
    if (data) res.locals.recipes = data;
    return next();
  }
  catch (err) {
    console.log(err);
    return next({log: "Couldn't find documents in the DB"})
  }
}


// delete a recipe
recipeController.deleteRecipe = async (req, res, next) => {
  try {
    
    const data = await recipe.deleteOne({_id: req.params.id});
    console.log('after deleting', data);
    if (data) {
      // try {
      //   const data = await recipe.find({});
      //   if (data) res.locals.recipes = data;
      //   return next();
      // }
      // catch (err) {
      //   console.log(err);
      //   return next({log: "Couldn't find documents in the DB"})
      // }
      return next();
    }
  }
  catch (err) {
    console.log(err);
    return next({log: "Couldn't delete document from the DB"})
  }
}

// get all meals
recipeController.getMeals = async (req, res, next) => {
  try {
    
    const data = await meals.find({});
    if (data) {
      const arr = [];
      for (let key in data) {
        arr.push({title: data[key].label, start: data[key].date, end: data[key].date});
      }
      console.log('ARR', arr);
      res.locals.meals = arr;
    }
    return next();
  }
  catch (err) {
    console.log(err);
    return next({log: "Couldn't find documents in the DB"})
  }
}

// add a meal
recipeController.addMeal = async (req, res, next) => {

  const date = req.body.start;
  const label = req.body.title;

  console.log("YOU ARE IN ADD MEAL FUNCTION");

  try {
    const result = await meals.create({date, label});
    console.log("result after creating doc", result);
    if (result) res.locals.meals = result;
    return next();
  }
  catch (err) {
    console.log(err);
    return next({log: "Document could not be created in the DB"});
  }
}

module.exports = recipeController;

const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const recipeController = require('./controllers/recipeController');


/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

// statically serve everything in the dist folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/public/styles.css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/styles.css'));
})

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

/*app.get('/recipes/:search', async (req, res) => {
  const appID = '4b6f74d0';
  const appKey = 'e745526e12db6881f707320becf348a3';
  const searchTerm = req.params.search;
  const requestString = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appID}&app_key=${appKey}`
  
  const data = await fetch(requestString);
  const results = await data.json();
  console.log(results);

  return res.status(200).json('request received and response sent');
})*/

app.post('/addRecipe', recipeController.addRecipe, (req, res) => {
  if (res.locals.result) return res.status(200);
})

app.get('/getRecipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.recipes);
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(3000, () => {
  console.log(`Server listening on port: 3000...`);
}); //listens on port 3000 -> http://localhost:3000/
const mongoose = require('mongoose');

/*const MONGO_URI = 'mongodb+srv://starwars:starwars13@cluster0.zssxb.mongodb.net/recipesDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'recipesDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));*/

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  ingredient: {type: String, required: true},
  label: {type: String, required: true},
  url: {type: String, required: true},
  img: {type: String, required: true},
  thumbnail: {type: String, required: true},
  calories: {type: Number, required: true},
  totalTime: {type: Number, required: true}
});

module.exports = mongoose.model('recipe', recipeSchema);
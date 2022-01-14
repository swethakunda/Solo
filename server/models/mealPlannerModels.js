const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealPlannerSchema = new Schema({
  date: {type: Date, required: true},
  label: {type: String, required: true},
});

module.exports = mongoose.model('mealPlanner', mealPlannerSchema);
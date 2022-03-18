const express = require('express');
const multer = require('multer');

const { createRecipe, getAllRecipes, getRecipe } = require('../middlewares/recipe.middleware.js');

const RecipeRouter = express.Router();

RecipeRouter.get('/single/:id', getRecipe);
RecipeRouter.get('/all', getAllRecipes);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/photos');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});

var upload = multer({ storage: storage });

RecipeRouter.post('/add', upload.single('displayPhoto'), createRecipe);

module.exports = RecipeRouter;

const express = require('express');
const multer = require('multer');

const { createRecipe, getAllRecipes } = require('../middlewares/recipe.middleware.js');

const RecipeRouter = express.Router();

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

RecipeRouter.post('/create', upload.single('recipeImage'), createRecipe);

module.exports = RecipeRouter;

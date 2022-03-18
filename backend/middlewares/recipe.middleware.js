const Recipe = require("../models/recipe.model.js");

async function getAllRecipes(req, res, next){
	const recipes = await Recipe.find({});

	if(recipes){

		res.send({
			message: 'Successfully fetch recipes!',
			data: recipes,
		});

	}else{

		res.status(401).send({
			message: 'Cannot fetch recipes',
		});

	}
}

async function getRecipe(req, res, next){

  const _id = req.params.id;

  const recipe = await Recipe.findById(_id);

  if(recipe){

    res.send({
      message: 'Successfully fetch recipe!',
      data: recipe,
    });

  }else{

    res.status(401).send({
      message: 'Cannot fetch recipe'
    });

  }
}

async function createRecipe(req, res, next) {
	const body = req.body;
	const file = req.file;

	const newRecipe = new Recipe({
		name: body.name,
		description: body.description,
		reference: body.reference,
		ingredients: JSON.parse(body.ingredients),
		displayPhoto: file.filename,
	});

	const createdRecipe = await newRecipe.save();


	res.send({
		message: 'Successfully upload image!',
		data: createdRecipe,
	});
}

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
}


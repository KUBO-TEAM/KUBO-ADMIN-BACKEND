import Recipe from "../models/recipe.model.js";

export async function getAllRecipes(req, res, next){
	const recipes = await Recipe.find({});

	if(recipes){
		res.send({
			message: 'Successfully fetch recipes!',
			data: recipes,
		});
	}else{
		res.status(401).send({
			message: 'Cannot fetch error',
		})
	}
}

export async function createRecipe(req, res, next) {
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

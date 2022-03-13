const mongoose =  require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		description: {type: String, required: true},
		reference: { type: String, required: true},
		ingredients: { type: [{type: String}], required: true},
		displayPhoto: { type: String, required: true},
	},
	{
		timestamps: true
	}
)

module.exports =  mongoose.model('Recipe', recipeSchema);

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeVersionsSchema = new Schema({
	recipeID: {
		type: Schema.Types.ObjectId,
		required: true
	},
	versions: [{
		title: String,
		description: String,
		imageSRC: String,
		creationDate: Date,
		ingredients: [String],
		directions: [String],
		cooking: String
	}]
});

module.exports = mongoose.model("RecipeVersions", recipeVersionsSchema);
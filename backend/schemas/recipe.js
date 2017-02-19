var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require("mongoose-type-url");

var recipeSchema = new Schema({
	title: String,
	description: String,
	imageSRC: String,
	creationDate: Date,
	ingredients: [String],
	directions: [String],
	cooking: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
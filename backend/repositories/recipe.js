var Repository = require("../units/Repository");
var Recipe = require("../schemas/recipe");

var RecipeRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = Recipe;
};

RecipeRepository.prototype = new Repository();

module.exports = new RecipeRepository();
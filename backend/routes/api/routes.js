const recipe = require("./recipe");
const recipeVersions = require("./recipe-versions");
const imageUploader = require("./image-uploader");

module.exports = function(app){
	app.use("/api/recipe", recipe);
	app.use("/api/versions", recipeVersions);
	app.use("/api/upload/image", imageUploader);
};
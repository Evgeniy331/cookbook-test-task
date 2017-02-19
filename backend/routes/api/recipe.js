const router = require("express").Router();
const recipeRepository = require("../../repositories/recipe");
const recipeVersionsRepository = require("../../repositories/recipe-versions");
const ValidateService = require("../../utils/ValidateService");
const isCorrectId = ValidateService.isCorrectId;

router.get("/", (req, res, next) => {
	
	recipeRepository.getAll(function(err, data) {
		
		if (err) 
			throw err;

        res.json(data);
    });

});

router.put("/:id", (req, res, next) => {
	
	var id = req.params.id || "";
	var reqBody = req.body || "";

	if (!isCorrectId(id)) 
		return res.status(400).send("Not valid id");

	reqBody.creationDate = new Date();

	recipeRepository.update(id, reqBody, function(err, data1) {
		
		if (err) 
			throw err;

		recipeVersionsRepository.addVersion(id, reqBody, function(error, data2) {
        	if (error) 
				throw error;
		});

		res.json(data1);

	});
});

router.delete("/:id", (req, res, next) => {

	var id = req.params.id || "";

	if (!isCorrectId(id)) 
		return res.status(400).send("Not valid id");
	
	recipeRepository.delete(id, function(err, deletedRecipe) {
		
		if (err) 
			throw err;

        recipeVersionsRepository.deleteByRecipeID(req.params.id, function(error, deletedVersion) {
        	if (error) 
				throw error;
        });

         res.json(req.params.id);

    });

});

router.post("/", (req, res, next) => {
	
	let reqBody = req.body;
	reqBody.creationDate = new Date();

	recipeRepository.add(reqBody, function(err, recipe) {
		
		if (err) 
			throw err;

		let versionBody = {};
		versionBody.recipeID = recipe._id;
		versionBody.versions = [];
		versionBody.versions.push(recipe);

		recipeVersionsRepository.add(versionBody, function(error, version) {
			if (error) 
				throw error;
		})

        res.json(recipe);
    });

});


module.exports = router;
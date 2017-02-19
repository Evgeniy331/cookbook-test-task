const router = require("express").Router();
const recipeVersionsRepository = require("../../repositories/recipe-versions");
const ValidateService = require("../../utils/ValidateService");
const isCorrectId = ValidateService.isCorrectId;

router.get("/:recipeID", (req, res, next) => {
	
	var recipeID = req.params.recipeID || "";

	if (!isCorrectId(recipeID)) 
		return res.status(400).send("Not valid id");

	recipeVersionsRepository.getByRecipeID(recipeID, function(err, data) {
		
		if (err) 
			throw err;

        res.json(data);
    });

});


module.exports = router;
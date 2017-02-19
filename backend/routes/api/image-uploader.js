let multiparty = require("multiparty");
let fs = require("fs");
const router = require("express").Router();

router.post("/", (req, res, next) => {
	
	let form = new multiparty.Form();

	form.parse(req, (err, fields, files) => {

		if (!files.imageFile)
			return;

	    let {path: tempPath, originalFilename} = files.imageFile[0];

	    let copyToPath = __dirname + "/../../data/images/" + originalFilename;

	    fs.readFile(tempPath, (err, data) => {
	        // make copy of image to new location
	        fs.writeFile(copyToPath, data, (err) => {
		        // delete temp image
		        fs.unlink(tempPath, () => {
		          res.send("File uploaded to: " + copyToPath);
		    });
	      }); 
	    }); 
	  })

});


module.exports = router;


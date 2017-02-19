module.exports = {
	isCorrectId: isCorrectId
};

function isCorrectId(id) {

	var id = '' + id;
	var regex = /^[a-fA-F0-9]{24}$/;

	id = id.trim();

	if(!id || !regex.test(id)) 
		return false;

	return true;
}
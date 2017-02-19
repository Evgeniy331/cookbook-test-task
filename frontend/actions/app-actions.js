import axios from "axios";

export const GET_RECIPES_REQUEST = "GET_RECIPES_REQUEST";
export const GET_RECIPES_REQUEST_ERROR = "GET_RECIPES_REQUEST_ERROR";
export const RECIPES_RECEIVED = "RECIPES_RECEIVED";

export const GET_VERSIONS_OF_RECIPE_REQUEST = "GET_VERSIONS_OF_RECIPE_REQUEST";
export const GET_VERSIONS_OF_RECIPE_REQUEST_ERROR = "GET_VERSIONS_OF_RECIPE_REQUEST_ERROR";
export const RECIPE_VERSIONS_RECEIVED = "RECIPE_VERSIONS_RECEIVED";

export const OPEN_OR_CLOSE_MODAL_WINDOW = "OPEN_OR_CLOSE_MODAL_WINDOW";

export const ADD_RECIPE_REQUEST = "ADD_RECIPE_REQUEST";
export const ADD_RECIPE_REQUEST_ERROR = "ADD_RECIPE_REQUEST_ERROR";
export const RECIPE_WAS_ADDED = "RECIPE_WAS_ADDED ";

export const DELETE_RECIPE_REQUEST = "DELETE_RECIPE_REQUEST";
export const DELETE_RECIPE_REQUEST_ERROR = "DELETE_RECIPE_REQUEST_ERROR";
export const RECIPE_WAS_DELETED = "RECIPE_WAS_DELETED  ";

export const SET_WINDOW_TYPE = "SET_WINDOW_TYPE";
export const SET_CURRENT_RECIPE = "SET_CURRENT_RECIPE";

export const UPDATE_RECIPE_REQUEST = "UPDATE_RECIPE_REQUEST ";
export const UPDATE_RECIPE_REQUEST_ERROR = "UPDATE_RECIPE_REQUEST_ERROR";
export const RECIPE_WAS_UPDATED = "RECIPE_WAS_UPDATED";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const SET_IMAGE = "SET_IMAGE";

export function updateRecipeRequest(id, body) {

	return (dispatch, getStore) => {

		dispatch({ type: UPDATE_RECIPE_REQUEST });

		return axios.put("/api/recipe/" + id, body)
		.then(response => {
			dispatch(recipeWasUpdated(id, response.data));
		})
		.catch(response => {
			dispatch(updateRecipeRequestError(response));
		})

	};

}

export function recipeWasUpdated(id, recipeBody) {

	return {
		type: RECIPE_WAS_UPDATED,
		id,
		recipeBody
	};
}

export function updateRecipeRequestError(error) {
	
	return {
		type: UPDATE_RECIPE_REQUEST_ERROR ,
		error
	};
}

export function setCurrentRecipe(recipe) {

	return {
		type: SET_CURRENT_RECIPE,
		recipe
	};
}

export function setWindowType(windowType) {

	return {
		type: SET_WINDOW_TYPE,
		windowType
	};
}

export function deleteRecipeRequest(id) {

	return (dispatch, getStore) => {

		dispatch({ type: DELETE_RECIPE_REQUEST });

		return axios.delete("/api/recipe/" +  id)
		.then(response => {
			dispatch(recipeWasDeleted(id));
		})
		.catch(response => {
			dispatch(deleteRecipeRequestError(response));
		});

	};

}

export function recipeWasDeleted(recipeID) {

	return {
		type: RECIPE_WAS_DELETED,
		recipeID
	};
}

export function deleteRecipeRequestError(error) {
	
	return {
		type: DELETE_RECIPE_REQUEST_ERROR,
		error
	};
}

export function addRecipeRequest(reqBody) {

	return (dispatch, getStore) => {

		dispatch({ type: ADD_RECIPE_REQUEST });

		return axios.post("/api/recipe", reqBody)
		.then(response => {
			dispatch(recipeWasAdded(response.data));
		})
		.catch(response => {
			dispatch(addRecipeRequestError(response));
		});

	};

}

export function addRecipeRequestError(error) {
	
	return {
		type: ADD_RECIPE_REQUEST_ERROR,
		error
	};
}

export function recipeWasAdded(recipe) {

	return {
		type: RECIPE_WAS_ADDED,
		recipe
	};
}


export function openOrCloseWindow(isOpen) {

	return {
		type: OPEN_OR_CLOSE_MODAL_WINDOW,
		isOpen
	};
}

export function getRecipesRequest() {

	return (dispatch, getStore) => {

		dispatch({ type: GET_RECIPES_REQUEST });

		return axios.get("/api/recipe")
		.then(response => {
			dispatch(recipesReceived(response.data));
		})
		.catch(response => {
			dispatch(getRecipesRequestError(response));
		});

	};
}

export function getRecipesRequestError(error) {
	
	return {
		type: GET_RECIPES_REQUEST_ERROR,
		error
	};
}

export function recipesReceived(recipes) {

	return {
		type: RECIPES_RECEIVED,
		recipes
	};
}

export function getVersionsForRecipeRequest(recipeID) {

	return (dispatch, getStore) => {

		dispatch({ type: GET_VERSIONS_OF_RECIPE_REQUEST });

		return axios.get("/api/versions/" + recipeID)
		.then(response => {
			dispatch(versionsReceived(response.data));
		})
		.catch(response => {
			dispatch(getVersionsForRecipeRequestError(response));
		});

	};
}

export function getVersionsForRecipeRequestError(error) {
	
	return {
		type: GET_VERSIONS_OF_RECIPE_REQUEST_ERROR,
		error
	};
}

export function versionsReceived(version) {

	return {
		type: RECIPE_VERSIONS_RECEIVED,
		version
	};
}

export function uploadImageRequest(imageFormData) {

	return (dispatch, getStore) => {

		dispatch({ type: UPLOAD_IMAGE_REQUEST });

		return axios.post("/api/upload/image", imageFormData)
		.then(response => {
		})
		.catch(response => {
			console.log(response);
		})

	};

}

export function setImage(image) {

	return {
		type: SET_IMAGE,
		image
	};
}
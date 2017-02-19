import axios from "axios";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const SET_IMAGE = "SET_IMAGE";

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
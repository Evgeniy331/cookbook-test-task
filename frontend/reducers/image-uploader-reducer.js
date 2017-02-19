import {
    SET_IMAGE,
    SET_IS_UPLOADED
} from "../actions/image-uploader-actions";

const initialState = {
    downloadableImage: "",
    isUploaded: false
};

export default function imageUploaderReducer(state = initialState, action) {
    
    switch (action.type) {

        case SET_IS_UPLOADED: {

            const {isUploaded} = action;

             return Object.assign({}, state, {
                isUploaded: isUploaded
            })
        }

        case SET_IMAGE: {

            const {image} = action;

             return Object.assign({}, state, {
                downloadableImage: image
            })
        }

        default: {
            return state;        
        }
    }
}
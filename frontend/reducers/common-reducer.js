import { combineReducers } from "redux";
import app from "./app-reducer";
import imageUploader from "./image-uploader-reducer";

import { routerReducer } from "react-router-redux";

export default combineReducers({
  app,
  imageUploader,
  routing: routerReducer
});

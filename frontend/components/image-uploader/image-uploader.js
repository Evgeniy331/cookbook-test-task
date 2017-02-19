import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/image-uploader-actions";
import "./image-uploader.css";

class ImageUploader extends Component {

	constructor(props) {    
	    super(props);
	    this._handleImageChange = this._handleImageChange.bind(this);
	}

	_handleImageChange(e) {
	    
	    e.preventDefault();
	    
	    let file = null;
	    let imageName = "";

	    if (e.target.files)
		    file = e.target.files[0];

	    if (file) {
		    this.props.setImage(file);
		    imageName = file.name;
	    } 

	    document.querySelector("#uploaded-image").innerHTML = imageName;
	}

	componentWillUnmount() {
		this.props.setImage("");
	}

	render() {
	    return (
	    	<div>
			    <div className="image-uploader-wrapper">
				    <div>Choose an image</div>
			        <input type="file" name="image-uploader" accept="image/*" onChange={this._handleImageChange} />
		        </div>
		        <span id="uploaded-image"></span>
		    </div>
	    )
	}
	
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const ImageUploaderConected = connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
export default  ImageUploaderConected
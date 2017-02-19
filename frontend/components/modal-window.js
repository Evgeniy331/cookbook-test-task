import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import sweetalert from "sweetalert";
import Modal from "react-modal";
import InputsList  from "./inputs-list/inputs-list";
import ImageUploader  from "./image-uploader/image-uploader";
import "../common/styles/sweetalert.css";
import {
	TITLE_MIN_LENGTH, 
	TITLE_MAX_LENGTH, 
	DESCRIPTION_MIN_LENGTH, 
	DESCRIPTION_MAX_LENGTH, 
	INGRIDIENT_MIN_LENGTH,
	INGRIDIENT_MAX_LENGTH,
	DIRECTION_MIN_LENGTH,
	DIRECTION_MAX_LENGTH,
	INGRIDIENTS_MIN_AMOUNT,
	DIRECTIONS_MIN_AMOUNT, 
	COOKING_MIN_LENGTH
} from "../../backend/config/constants";

class ModalWindow extends Component {

	constructor(props) {
        super(props);
        this.closeWindow = this.closeWindow.bind(this);
        this.fillTheForm = this.fillTheForm.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.makeAction = this.makeAction.bind(this);
    }
	
	render() {

		const {windowIsOpen} = this.props.stateFromReducer.app;
		const {windowType} = this.props.stateFromReducer.app;

		const modalWindowStyles = {
			overlay : {
				backgroundColor : "rgba(0, 0, 0, 0.75)"
			},
			content : {
		        width: "300px",
			    margin: "0 auto",
			    background: "#F5EEE0",
			    borderRadius: "6px",
			    padding: "0",
			    position: "static",
			    marginTop: "50px",
			    maxHeight: "calc(100vh - 50px)"
			}
		};

		
		let ingredients = [];
		let directions = [];

		if (windowType === "editing" && windowIsOpen) {
			ingredients = this.props.stateFromReducer.app.currentRecipe.ingredients;
			directions = this.props.stateFromReducer.app.currentRecipe.directions;
		}

		//I know that this is not the best solution
		//this is a temporary solution
		var that = this;
		setTimeout(function() {
			if (windowType === "editing" && windowIsOpen)
				that.fillTheForm();
		}, 0);

	 	return (
	
	 		<div>
	 			<Modal
					  isOpen={windowIsOpen}
					  contentLabel="Modal"
					  style={modalWindowStyles}
					>
					<div className="modal-header">
						<h4>Add recipe</h4>
						<button className="close-button" onClick={this.closeWindow}><i className="fa fa-times"></i></button>
					</div>
				    <div className="modal-body">
					    <input type="text" placeholder="Title" name="title"/>
					    <textarea placeholder="Description" id="description"></textarea>
					    <ImageUploader/>
					    <InputsList
						    title = "Ingredients"
						    id = "ingredients-inputs-list"
						    itemName = "ingredient"
						    values = {ingredients}
					    />
					    <InputsList
						    title = "Directions"
						    id = "directions-inputs-list"
						    itemName = "direction"
						    values = {directions}
					    />
					    <textarea placeholder="Cooking process" id="cooking"></textarea>
				    </div>
				    <div className="modal-footer">
					    <button className="primary-button green-button" onClick={this.makeAction}>Add recipe</button>
				    </div>
				</Modal>
            </div>
	 	);

	}

	makeAction() {

		if (!this.validateInput())
			return;

		if (this.props.stateFromReducer.app.windowType === "editing") {
			this.editRecipe();
			return;
		}

		this.addRecipe();
	}

	fillTheForm() {

		const {currentRecipe} = this.props.stateFromReducer.app;
		
		let title = document.querySelector("input[name=title]");
		if (title)
			title.value = currentRecipe.title;
		
		let description = document.querySelector("#description");
		if (description)
			description.value = currentRecipe.description;

		let cooking = document.querySelector("#cooking");
		if (cooking) 
			cooking.value = currentRecipe.cooking;

		let header = document.querySelector(".modal-header h4");
		if (header)
			header.innerHTML = "Edit recipe";

		let button = document.querySelector(".modal-footer button");
		if (button)
			button.innerHTML = "Edit recipe";

		let imageName = document.querySelector("#uploaded-image");
		if (imageName) {
			if (imageName.innerHTML === "")
				imageName.innerHTML = currentRecipe.imageSRC;
		}

	}

	editRecipe() {
		
		const {currentRecipe} = this.props.stateFromReducer.app;

		let title = document.querySelector("input[name=title]").value;
		let description = document.querySelector("#description").value;

		let ingredientsLi = document.querySelectorAll("#ingredients-inputs-list input");
		let ingredients = [];
		for (let i = 0; i < ingredientsLi.length; i++)
			ingredients.push(ingredientsLi[i].value);

		let directionsLi = document.querySelectorAll("#directions-inputs-list input");
		let directions = [];
		for (let i = 0; i < directionsLi.length; i++)
			directions.push(directionsLi[i].value);

		let cooking = document.querySelector("#cooking").value;
				
		let reqBody = {
			title: title,
			description: description,
			imageSRC: currentRecipe.imageSRC,
			ingredients: ingredients,
			directions: directions,
			cooking: cooking
		}

		let imageName = document.querySelector("#uploaded-image").innerHTML;

		if (imageName != currentRecipe.imageSRC && imageName != "") {

			let image = this.props.stateFromReducer.imageUploader.downloadableImage;
			let imageFormData = new FormData();
			imageFormData.append("imageFile", image);
			this.props.uploadImageRequest(imageFormData);
			reqBody.imageSRC = image.name;
		}
		
		let that = this;

		setTimeout(function() {
			that.props.updateRecipeRequest(currentRecipe._id, reqBody);
		}, 100);

		this.closeWindow();
	}

	addRecipe() {

		let title = document.querySelector("input[name=title]").value;
		let description = document.querySelector("#description").value;
		let image = this.props.stateFromReducer.imageUploader.downloadableImage;

		let ingredientsLi = document.querySelectorAll("#ingredients-inputs-list input");
		let ingredients = [];
		for (let i = 0; i < ingredientsLi.length; i++)
			ingredients.push(ingredientsLi[i].value);

		let directionsLi = document.querySelectorAll("#directions-inputs-list input");
		let directions = [];
		for (let i = 0; i < directionsLi.length; i++)
			directions.push(directionsLi[i].value);

		let cooking = document.querySelector("#cooking").value;
				
		let imageFormData = new FormData();

		imageFormData.append("imageFile", image);

		this.props.uploadImageRequest(imageFormData);

		let reqBody = {
			title: title,
			description: description,
			imageSRC: image.name,
			ingredients: ingredients,
			directions: directions,
			cooking: cooking
		}	
		
		let that = this;

		setTimeout(function() {
			that.props.addRecipeRequest(reqBody);
		}, 100);

		this.closeWindow();
	}

	validateInput() {

		let title = document.querySelector("input[name=title]").value;
		
		if (title.length < TITLE_MIN_LENGTH || title.length > TITLE_MAX_LENGTH) {
			
			sweetalert({
                 title: "Title must be in range  " + TITLE_MIN_LENGTH + " - " + TITLE_MAX_LENGTH + " characters!",
                 type: "warning"
            });

            return false;
		}

		let description = document.querySelector("#description").value;
		
		if (description.length < DESCRIPTION_MIN_LENGTH || description.length > DESCRIPTION_MAX_LENGTH) {
			
			sweetalert({
                 title: "Description must be in range  " +  DESCRIPTION_MIN_LENGTH + " - " +  DESCRIPTION_MAX_LENGTH + " characters!",
                 type: "warning"
            });

            return false;
		}

		
		let image = document.querySelector("#uploaded-image").innerHTML;

		if (image === "") {

			sweetalert({
                 title: "Please select an image!",
                 type: "warning"
            });

            return false;
		}
		

		let ingredientsLi = document.querySelectorAll("#ingredients-inputs-list input");
		let ingredients = [];
		for (let i = 0; i < ingredientsLi.length; i++)
			ingredients.push(ingredientsLi[i].value);

		if (ingredients.length < INGRIDIENTS_MIN_AMOUNT) {
			
			sweetalert({
                 title: "Please add at least " + INGRIDIENTS_MIN_AMOUNT + " ingredient!",
                 type: "warning"
	        });

			return false;
		}
		
		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].length < INGRIDIENT_MIN_LENGTH ||
				ingredients[i].length > INGRIDIENT_MAX_LENGTH) {
				
				sweetalert({
	                 title: "Ingredient must be in range  " + INGRIDIENT_MIN_LENGTH + " - " + INGRIDIENT_MAX_LENGTH + " characters!",
	                 type: "warning"
	            });

				return false;
			}
		}

		let directionsLi = document.querySelectorAll("#directions-inputs-list input");
		let directions = [];
		for (let i = 0; i < directionsLi.length; i++)
			directions.push(directionsLi[i].value);

		if (directions.length < DIRECTIONS_MIN_AMOUNT) {
			
			sweetalert({
                 title: "Please add at least " + DIRECTIONS_MIN_AMOUNT + " direction!",
                 type: "warning"
	        });

			return false;
		}
		
		for (let i = 0; i < directions.length; i++) {
			if (directions[i].length < DIRECTION_MIN_LENGTH ||
				directions[i].length > DIRECTION_MAX_LENGTH) {
				
				sweetalert({
	                 title: "Direction must be in range  " + DIRECTION_MIN_LENGTH + " - " + DIRECTION_MAX_LENGTH + " characters!",
	                 type: "warning"
	            });

				return false;
			}
		}

		let cooking = document.querySelector("#cooking").value;

		if (cooking.length < COOKING_MIN_LENGTH) {

			sweetalert({
                 title: "Cooking process cannot be less than  " + COOKING_MIN_LENGTH + " characters!",
                 type: "warning"
            });

			return false;
		}

		return true;
	}

	closeWindow() {
	 	this.props.openOrCloseWindow(false);
	}

	componentWillMount() {
		this.props.getRecipesRequest();
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
const  ModalWindowConected = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
export default  ModalWindowConected
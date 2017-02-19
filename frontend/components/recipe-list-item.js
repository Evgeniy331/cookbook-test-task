import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import { Link } from "react-router";

import dateformat from "dateformat";

class RecipeListItem extends Component {

	constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }
	
	render() {

		let linkPath = "";
		if (this.props.type === "recipe")
			linkPath = "/recipe/" + this.props.recipe._id;
		else
			linkPath = "/version/" + this.props.recipe._id;

		let date = new Date(this.props.recipe.creationDate);

	 	return (
	 		<li className={"clearfix " + (this.props.type === "version" ? "version" : "")}>
		 		<div className="thumbnail">
		 		    <a href={"/" + this.props.recipe.imageSRC}>
				 		<img src={"/" + this.props.recipe.imageSRC}/>
				 	</a>
		 		</div>
		 		<div className="item-info-block">
			 		<div className="item-header">
			 		    <div className="link-wrapper">
					 		<Link to={linkPath}>
						 		<h3>{this.props.recipe.title}</h3>
					 		</Link>
				 		</div>
				 		<button className="remove-button" onClick={this.deleteRecipe}><i className="fa fa-times"></i></button>
				 		<button className="edit-button" onClick={this.editRecipe}><i className="fa fa-pencil-square-o"></i></button>	 		
			 		</div>
			 		<p>{this.props.recipe.description}</p>
			 		<span>{dateformat(date, "dddd, mmmm dS, yyyy, HH:MM")}</span>
		 		</div>
	 		</li>
	 	);

	 }

	componentDidMount() {
		
		if (this.props.type != "version")
			return;

		let removeButton = document.querySelector(".remove-button");
		if (removeButton)
			removeButton.parentNode.removeChild(removeButton);

		let editButton = document.querySelector(".edit-button");
		if (editButton) 
			editButton.parentNode.removeChild(editButton);

    }

	 editRecipe() {
	 	
	 	if (this.props.type != "recipe")
	 		return;

	 	this.props.setWindowType("editing");
	 	this.props.setCurrentRecipe(this.props.recipe);
		this.props.openOrCloseWindow(true);
	 }

	 deleteRecipe() {
	 	
	 	if (this.props.type != "recipe")
	 		return;

	 	this.props.deleteRecipeRequest(this.props.recipe._id);
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
const RecipeListItemConected = connect(mapStateToProps, mapDispatchToProps)(RecipeListItem);
export default RecipeListItemConected
import React, { Component } from "react";
import RecipeListItem from "./recipe-list-item.js";

export default class RecipesList extends Component {
	
	render() {

		if (this.props.recipes.length === 0)
			return (<h2>No recipes yet!</h2>);

	 	return (
	 			<ul id="recipes-list">
		            {this.props.recipes.map(function(recipe) {

		                return <RecipeListItem key={recipe._id} recipe={recipe} type="recipe"/>
		            })}
		        </ul>
	 	);

	 }
}
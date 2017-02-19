import React, { Component } from "react";
import { bindActionCreators } from "redux";
import RecipeListItem from "./recipe-list-item.js";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import NotFound from "./not-found/not-found";

class VersionsList extends Component {

	constructor(props) {
        super(props);
        this.getAllPreviousVerions = this.getAllPreviousVerions.bind(this);
    }
	
	render() {

		let prevVersions = this.getAllPreviousVerions();

		if (prevVersions.length === 0)
			return this.notFoundRender();

	 	return (
		 		<div id="cookbook-app">
				 	<div className="heading clearfix">
				 		<h2>All previous versions of recipe</h2>
			 		</div>	
		 			<ul id="recipes-list">
			            {prevVersions.map(function(version) {
			                return <RecipeListItem key={version._id} recipe={version} type="version"/>
			            })}
			        </ul>
		        </div>
	 	);

	} 

	notFoundRender() {
		return (
		    <div id="cookbook-app">
	            <h1 className="not-found">Recipes not found!</h1>
	        </div>
        );
	}

	getAllPreviousVerions() {
		
		const {versions} = this.props.stateFromReducer.app;
		const {recipes} = this.props.stateFromReducer.app;
		const recipeID = this.props.routeParams.id;
		
		let creationDate = "";

		for (let i = 0; i < recipes.length; i++) {
			if (recipeID === recipes[i]._id)
				creationDate = recipes[i].creationDate;
		}

		let prevVersions = [];

		if (creationDate === "")
			return prevVersions;

		for (let i = 0; i < versions.length; i++) {
			if ( new Date(versions[i].creationDate).getTime() < new Date(creationDate) )
				prevVersions.push(versions[i]);
		}

		return prevVersions;

	}

	componentWillMount() {
		this.props.getRecipesRequest();
		this.props.getVersionsForRecipeRequest(this.props.routeParams.id);
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
const  VersionsListConected = connect(mapStateToProps, mapDispatchToProps)(VersionsList);
export default  VersionsListConected
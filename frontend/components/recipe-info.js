import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import { Link } from "react-router";
import NotFound from "./not-found/not-found";

class RecipeInfo extends Component {

    constructor(props) {
        super(props);
        this.getRecipe = this.getRecipe.bind(this);
        this.getVersions = this.getVersions.bind(this);
    }
	
	render() {

        let recipe = this.getRecipe();
        let counter = 0;

        let linkPath = "";
        if (!this.props.version)
            linkPath = "/versions/" + this.props.routeParams.id;

        //if recipe not found
        if (JSON.stringify(recipe) === JSON.stringify({}))
            return (<div><NotFound/></div>);

	 	return (
	 		<div id="cookbook-app" className="recipe-info">
		 		<h2>{recipe.title}</h2>
		 		<div className="reset-paddings">
			 		<img src={"/" + recipe.imageSRC} />
		 		</div>
                <h3 className="ingredients-title">Ingredients:</h3>
                <div className="ingredients">
                    <dl>
                        {                
                            recipe.ingredients.map(function(ingredient) {
                                ++counter;
                                return <dt key={"ingredient-" + counter}>{ingredient}</dt>;
                            })
                        }
                    </dl>
                </div>
                <h3 className="directions-title">Directions:</h3>
                <div className="directions clearfix">
	                <dl>
    		            {
                            recipe.directions.map(function(direction) {
                                ++counter;
    			                return <dt key={"direction-" + counter}>{direction}</dt>;
    			            })
                        }
	                </dl>
                </div>
                <p>{recipe.cooking}</p>
                <Link to={linkPath} id="versions-link">
                    <button className="primary-button" onClick={this.getVersions}>View all previous versions of this recipe</button>
                </Link>
	 		</div>
	 	);

	}

    componentDidMount() {
        
        if (!this.props.version)
            return;

        let versionsLink = document.querySelector("#versions-link");
        if (versionsLink)
            versionsLink.parentNode.removeChild(versionsLink);

    }

    getVersions() {
        this.props.getVersionsForRecipeRequest(this.props.routeParams.id);
    }

    getRecipe() {

        if (this.props.version)
            return this.props.version;
        
        const recipeID = this.props.routeParams.id;

        const {recipes} = this.props.stateFromReducer.app;
        let recipe = {};

         for (let i = 0; i < recipes.length; i++) {
    
            if (recipes[i]._id ==  recipeID) 
                recipe = Object.assign({}, recipes[i], {});
        }

        return recipe;
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
const  RecipeInfoConected = connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);
export default RecipeInfoConected
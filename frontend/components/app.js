import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import ModalWindow  from "./modal-window";
import RecipesList from "./recipes-list";

class CookBookApp extends Component {

	constructor(props) {
        super(props);
        this.openWindow = this.openWindow.bind(this);
    }
	
	render() {

		const {recipes} = this.props.stateFromReducer.app;

	 	return (

	 		<div id="cookbook-app">
		 		<ModalWindow/>
		 		<div className="heading clearfix">
			 		<h2>Recipes</h2>
			 		<span className="red-button button" onClick={this.openWindow}><i className="fa fa-plus"></i>Add recipe</span>
		 		</div>		
		 		<RecipesList recipes={recipes}/>
            </div>
	 	);

	}

	openWindow() {
		this.props.setWindowType("adding");
		this.props.openOrCloseWindow(true);
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
const  CookBookAppConected = connect(mapStateToProps, mapDispatchToProps)(CookBookApp);
export default  CookBookAppConected
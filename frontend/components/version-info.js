import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/app-actions";
import { Link } from "react-router";
import NotFound from "./not-found/not-found";
import RecipeInfo from "./recipe-info";

class VersionInfo extends Component {

    constructor(props) {
        super(props);
        this.getVersion = this.getVersion.bind(this);
    }

    render() {
    	
    	let version = this.getVersion();
    	
    	//if version of recipe not found
        if (JSON.stringify(version) === JSON.stringify({}))
            return (<div><NotFound/></div>);

        return (
        	<div>
	        	<RecipeInfo version={version}/>
        	</div>
        );
    }

    getVersion() {

    	const versionID = this.props.routeParams.id;
    	const {versions} = this.props.stateFromReducer.app;

    	let version = {};

         for (let i = 0; i < versions.length; i++) {
    
            if (versions[i]._id ==  versionID) 
                version = Object.assign({}, versions[i], {});
        }

        return version;
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

const  VersionInfoConected = connect(mapStateToProps, mapDispatchToProps)(VersionInfo);
export default VersionInfoConected
import React from "react"
import { render } from "react-dom"
import App from "./containers/app"
import CookBookApp from "./components/app"
import RecipeInfo from "./components/recipe-info"
import VersionInfo from "./components/version-info"
import VersionsList from "./components/recipe-versions-list"
import {IndexRoute, Route, Router, browserHistory} from "react-router";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducer from "./reducers/common-reducer"

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
    	<Router history={browserHistory}>
	        <Route path="/" component={App}>
		         <IndexRoute component={ CookBookApp} />
              <Route path="recipe/:id" component={RecipeInfo} />
              <Route path="versions/:id" component={VersionsList} />
              <Route path="version/:id" component={VersionInfo} />
	        </Route>
	    </Router>
    </Provider>)
    , document.getElementById("root")
)

import {
    GET_RECIPES_REQUEST,
    GET_RECIPES_REQUEST_ERROR, 
    RECIPES_RECEIVED,
    GET_VERSIONS_OF_RECIPE_REQUEST,
    GET_VERSIONS_OF_RECIPE_REQUEST_ERROR, 
    RECIPE_VERSIONS_RECEIVED,
    OPEN_OR_CLOSE_MODAL_WINDOW,
    ADD_RECIPE_REQUEST_ERROR,
    RECIPE_WAS_ADDED,
    DELETE_RECIPE_REQUEST_ERROR,
    RECIPE_WAS_DELETED,
    SET_WINDOW_TYPE,
    SET_CURRENT_RECIPE,
    UPDATE_RECIPE_REQUEST_ERROR,
    RECIPE_WAS_UPDATED
} from "../actions/app-actions";

const initialState = {
    recipes: [],
    versions: [],
    windowIsOpen: false,
    windowType: "",
    currentRecipe: ""
};

export default function appReducer(state = initialState, action) {
    
    switch (action.type) {

        case RECIPE_WAS_UPDATED: {

            const {recipeBody, id} = action;

            for (let i = 0; i < state.recipes.length; i++) {
                if (id === state.recipes[i]._id) {
                     state.recipes[i] = recipeBody;
                     state.recipes[i]._id = id;
                }
            }

            return Object.assign({}, state, {
                recipes: sortByDate(state.recipes)
            })
        }

        case SET_CURRENT_RECIPE: {

            const {recipe} = action;

             return Object.assign({}, state, {
                currentRecipe: recipe
            })
        }

        case SET_WINDOW_TYPE: {

            const {windowType} = action;

             return Object.assign({}, state, {
                windowType: windowType
            })
        }

        case RECIPE_WAS_DELETED: {

            const {recipeID} = action;

            for (let i = 0; i < state.recipes.length; i++)
                if (recipeID === state.recipes[i]._id) 
                    state.recipes.splice(i, 1);

             return Object.assign({}, state, {
                recipes: sortByDate(state.recipes)
            })
        }

        case RECIPE_WAS_ADDED: {

            const {recipe} = action;

            state.recipes.push(recipe);

             return Object.assign({}, state, {
                recipes: sortByDate(state.recipes)
            })
        }

        case OPEN_OR_CLOSE_MODAL_WINDOW: {

            const {isOpen} = action;

             return Object.assign({}, state, {
                windowIsOpen: isOpen
            })
        }

        case RECIPES_RECEIVED: {
            
            const {recipes} = action;

            return Object.assign({}, state, {
                recipes: sortByDate(recipes)
            })
        }

        case RECIPE_VERSIONS_RECEIVED: {
            
            const {version} = action;

            return Object.assign({}, state, {
                versions: sortByDate(version.versions)
            })
        }

        case UPDATE_RECIPE_REQUEST_ERROR: {

            console.log(UPDATE_RECIPE_REQUEST_ERROR);
            console.log(action.error);
            return state;
        }
        
        case ADD_RECIPE_REQUEST_ERROR: {

            console.log(ADD_RECIPE_REQUEST_ERROR);
            console.log(action.error);
            return state;
        }

        case GET_VERSIONS_OF_RECIPE_REQUEST_ERROR: {

            console.log(GET_VERSIONS_OF_RECIPE_REQUEST_ERROR);
            console.log(action.error);
            return state;
        }

        case GET_RECIPES_REQUEST_ERROR: {

            console.log(GET_RECIPES_REQUEST_ERROR);
            console.log(action.error);
            return state;
        }

        default: {
            return state;        
        }
    }
}

function sortByDate(recipes) {

    recipes.sort(function(a, b) {
        return new Date(a.creationDate) - new Date(b.creationDate);
    });

    return recipes;

}
// reciepeReducer.ts


// Action Types
export const FETCH_RECIPES_START = "FETCH_RECIPES_START";

// Action Interfaces
interface FetchRecipesStartAction {
  type: typeof FETCH_RECIPES_START;
  payload: Document[];
}

// Action Creators
export const fetchRecipesStart = (recipes: Document[]): FetchRecipesStartAction => ({
  type: FETCH_RECIPES_START,
  payload: recipes,
});

// Reducer
// ...


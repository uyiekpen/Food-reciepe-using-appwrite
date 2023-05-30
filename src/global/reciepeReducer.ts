import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RecipeState = {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
};

type Recipe = {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  reviews: Review[];
};

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const initialState: RecipeState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchRecipesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchRecipesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure } = recipeSlice.actions;
export default recipeSlice.reducer;



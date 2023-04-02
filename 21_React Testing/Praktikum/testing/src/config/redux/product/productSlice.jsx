import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [
		{
			uuid: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
			productName: "John",
			productCategory: "Doe",
			productFreshness: "Doe",
			productPrice: 0,
			productImage: "Doe",
			productDescription: "Doe",
		},
	],
};

const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		add: (state, action) => {
			return {
				...state,
				products: action.payload,
			};
		},
		delete: (state, action) => {
			return {
				...state,
				products: action.payload,
			};
		},
		update: (state, action) => {
			return {
				...state,
				products: action.payload,
			};
		},
	},
});

export const { actions: productAction, reducer: productReducer } = productSlice;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isAuth: false,
};
const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		auth: (state, action) => {
			return {
				...state,
				isAuth: action.payload,
			};
		},
	},
});
export const { actions: authAction, reducer: authReducer } = authSlice;

import { combineReducers } from "redux";
import { productReducer } from "./product/productSlice";
import { authReducer } from "./auth/authSlice";
const reducer = combineReducers({
	products: productReducer,
	auth: authReducer,
});

export default reducer;

import { combineReducers } from "redux";
import { productReducer } from "./product/productSlice";
const reducer = combineReducers({
	products: productReducer,
});

export default reducer;

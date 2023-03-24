import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../../pages/Auth/Signup/Signup";
import Signin from "../../pages/Auth/Signin/Signin";
import CreateProduct from "../../pages/CreateProduct/CreateProduct";
import DetailProduct from "../../pages/DetailProduct/DetailProduct";
import LandingPage from "../../pages/LandingPage/LandingPage";
const RootRouting = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/createproduct" element={<CreateProduct />} />
				<Route path="/detailproduct/:id" element={<DetailProduct />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</BrowserRouter>
	);
};
export default RootRouting;

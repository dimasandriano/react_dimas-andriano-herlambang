import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/createproduct" element={<CreateProduct />} />
				<Route path="/detailproduct/:id" element={<DetailProduct />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

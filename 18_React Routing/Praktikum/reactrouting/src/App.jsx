import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/createproduct" element={<CreateProduct />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

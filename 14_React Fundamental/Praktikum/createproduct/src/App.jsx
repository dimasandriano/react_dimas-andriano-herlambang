import React from "react";
import { Navbar } from "./component/Organism/Navbar/Navbar";
import { InputProduct } from "./component/Organism/Input Product/InputProduct";
import { ListProduct } from "./component/Organism/List Product/ListProduct";
import "./App.style.css";

function App() {
	return (
		<div>
			<Navbar />
			<InputProduct />
			<ListProduct />
		</div>
	);
}

export default App;

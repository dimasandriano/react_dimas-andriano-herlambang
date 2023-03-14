import React, { useState } from "react";
import { Navbar } from "./component/Organism/Navbar/Navbar";
import { InputProduct } from "./component/Organism/Input Product/InputProduct";
import { ListProduct } from "./component/Organism/List Product/ListProduct";
import "./App.style.css";
import Article from "./Article";

function App() {
	const [isIndonesia, SetIsIndonesia] = useState(false);
	const [productName, SetProductName] = useState("");
	const [productPrice, SetProductPrice] = useState(0);
	const [error, setError] = useState(false);
	const handleRandomNumber = (e) => {
		e.preventDefault();
		console.log(Math.floor(Math.random() * 100));
	};
	const handleBahasa = () => {
		SetIsIndonesia(!isIndonesia);
	};
	const handleProductName = (e) => {
		if (e.target.value.length >= 10) {
			alert("Product name tidak boleh 10 karakter");
			e.target.value = "";
		}
		SetProductName(e.target.value);
	};
	const handleSubmit = () => {
		if (productName != "" && productPrice != 0) {
			setError(false);
		} else {
			setError(true);
		}
	};
	return (
		<div>
			<Navbar />
			<InputProduct
				randomNumber={handleRandomNumber}
				article={Article}
				bahasa={isIndonesia}
				gantiBahasa={handleBahasa}
				valueProductName={handleProductName}
				productName={productName}
			/>
			<ListProduct />
		</div>
	);
}

export default App;

import React, { useState } from "react";
import { Navbar } from "./component/Organism/Navbar/Navbar";
import { InputProduct } from "./component/Organism/Input Product/InputProduct";
import { ListProduct } from "./component/Organism/List Product/ListProduct";
import "./App.style.css";
import Article from "./Article";

function App() {
	const [isIndonesia, setIsIndonesia] = useState(false);
	const [productName, setProductName] = useState("");
	const [productImage, setProductImage] = useState();
	const [productPrice, setProductPrice] = useState();
	const handleRandomNumber = (e) => {
		e.preventDefault();
		console.log(Math.floor(Math.random() * 100));
	};
	const handleBahasa = () => setIsIndonesia(!isIndonesia);
	const handleProductName = (e) => {
		if (e.target.value.length >= 10) {
			alert("Product name tidak boleh 10 karakter");
			e.target.value = "";
		}
		setProductName(e.target.value);
	};
	const handleProductImage = (e) => setProductImage(e.target.value);
	const handleProductPrice = (e) => setProductPrice(e.target.value);
	return (
		<div>
			<Navbar />
			<InputProduct
				randomNumber={handleRandomNumber}
				article={Article}
				bahasa={isIndonesia}
				gantiBahasa={handleBahasa}
				handleProductName={handleProductName}
				productName={productName}
				handleProductImage={handleProductImage}
				productImage={productImage}
				handleProductPrice={handleProductPrice}
				productPrice={productPrice}
			/>
			<ListProduct />
		</div>
	);
}

export default App;

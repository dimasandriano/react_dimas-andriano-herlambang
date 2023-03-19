import React, { useEffect, useState } from "react";
import { Navbar } from "../../component/Organism/Navbar/Navbar";
import { InputProduct } from "../../component/Organism/Input Product/InputProduct";
import { ListProduct } from "../../component/Organism/List Product/ListProduct";
import "./CreateProduct.style.css";
import Article from "../../Article";

function App() {
	const [isIndonesia, setIsIndonesia] = useState(false);
	const [productName, setProductName] = useState("");
	const [productImage, setProductImage] = useState();
	const [productPrice, setProductPrice] = useState();
	const [products, setProducts] = useState([
		{
			id: "1231231231",
			productName: "Sepatu",
			productCategory: "1",
			productFreshness: "Brand New",
			productPrice: "100",
		},
		{
			id: "1293877826",
			productName: "Sandal",
			productCategory: "2",
			productFreshness: "Second",
			productPrice: "200",
		},
		{
			id: "3049898698",
			productName: "Tas",
			productCategory: "3",
			productFreshness: "Refurbished",
			productPrice: "300",
		},
	]);
	const [formProduct, setFormProduct] = useState({
		id: "",
		productName: "",
		productCategory: "",
		productFreshness: "",
		productPrice: "",
	});

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

	const handleSubmit = (e) => {
		e.preventDefault();
		setProducts([
			...products,
			{ ...formProduct, id: Math.floor(Math.random() * 10000000000) },
		]);
		setFormProduct({
			id: "",
			productName: "",
			productCategory: "",
			productFreshness: "",
			productPrice: "",
		});
	};

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			const newProducts = products.filter((item) => item.id !== id);
			setProducts(newProducts);
		}
	};
	useEffect(() => {
		alert("Welcome");
	}, []);

	useEffect(() => {
		localStorage.setItem("products", JSON.stringify(products));
	}, [products]);
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
				handleSubmit={handleSubmit}
				formProduct={formProduct}
				setName={(e) =>
					setFormProduct({ ...formProduct, productName: e.target.value })
				}
				setCategory={(e) =>
					setFormProduct({ ...formProduct, productCategory: e.target.value })
				}
				setFreshness={(e) =>
					setFormProduct({ ...formProduct, productFreshness: e.target.value })
				}
				setPrice={(e) =>
					setFormProduct({ ...formProduct, productPrice: e.target.value })
				}
			/>
			<ListProduct products={products} handleDelete={handleDelete} />
		</div>
	);
}

export default App;

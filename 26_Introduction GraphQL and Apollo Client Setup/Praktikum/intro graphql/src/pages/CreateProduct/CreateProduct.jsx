import React, { useEffect, useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import {
	useProductSelector,
	useTypeProductSelector,
} from "../../config/redux/product/productSelector";
import { useDispatch } from "react-redux";
import {
	deleteProducts,
	retrieveProducts,
} from "../../config/redux/product/productThunk";

function CreateProduct() {
	const [isIndonesia, setIsIndonesia] = useState(false);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);

	const dispatch = useDispatch();
	const products = useProductSelector();

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			dispatch(deleteProducts(id));
		}
	};
	const type = useTypeProductSelector();
	useEffect(() => {
		dispatch(retrieveProducts());
		if (type === "deleteProducts.fulfilled") {
			dispatch(retrieveProducts());
		}
	}, [type]);
	return (
		<div>
			<Navbar />
			<InputProduct
				article={Article}
				bahasa={isIndonesia}
				gantiBahasa={handleBahasa}
			/>
			<ListProduct products={products} handleDelete={handleDelete} />
		</div>
	);
}

export default CreateProduct;

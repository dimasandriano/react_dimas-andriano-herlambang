import React, { useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProductSelector } from "../../config/redux/product/productSelector";
import { useDispatch } from "react-redux";
import { productAction } from "../../config/redux/product/productSlice";

function CreateProduct() {
	const [isIndonesia, setIsIndonesia] = useState(false);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);

	const dispatch = useDispatch();
	const products = useProductSelector();

	const handleDelete = (uuid) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			const newProducts = products.filter((product) => product.uuid !== uuid);
			console.log(newProducts);
			dispatch(productAction.delete([...newProducts]));
		}
	};
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

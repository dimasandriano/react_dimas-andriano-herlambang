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
	const regex = /^[^\s][\w\s]*[^\s\W]$/;
	const formik = useFormik({
		initialValues: {
			productName: "",
			productCategory: "",
			productImage: "",
			productFreshness: "",
			productDescription: "",
			productPrice: "",
		},
		validationSchema: Yup.object().shape({
			productName: Yup.string()
				.min(5, "Must be 5 characters or less")
				.required()
				.matches(
					regex,
					"Tidak boleh ada symbol dan tidak boleh diawali dan diakhiri dengan spasi"
				),
			productCategory: Yup.string().required(),
			productImage: Yup.string().required(),
			productFreshness: Yup.string().required(),
			productDescription: Yup.string().required(),
			productPrice: Yup.number().required(),
		}),
		onSubmit: (values) => {
			console.log(values);
			dispatch(
				productAction.add([...products, { ...values, uuid: crypto.randomUUID() }])
			);
		},
	});
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
				formik={formik}
			/>
			<ListProduct products={products} handleDelete={handleDelete} />
		</div>
	);
}

export default CreateProduct;

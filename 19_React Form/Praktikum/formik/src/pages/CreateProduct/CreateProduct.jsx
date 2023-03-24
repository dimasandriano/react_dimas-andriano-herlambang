import React, { useEffect, useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import { useFormik } from "formik";
import * as Yup from "yup";

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
			setProducts([
				...products,
				{ ...values, id: Math.floor(Math.random() * 10000000000) },
			]);
		},
	});
	console.log(formik.errors);
	const [isIndonesia, setIsIndonesia] = useState(false);
	const [products, setProducts] = useState([]);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			const newProducts = products.filter((item) => item.id !== id);
			setProducts(newProducts);
		}
	};

	useEffect(() => {
		localStorage.setItem("products", JSON.stringify(products));
	}, [products]);

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

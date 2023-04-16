import React, { useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
	deleteProductsByIdMutation,
	getProductsQuery,
} from "../../config/apollo/products";

function CreateProduct() {
	const [isIndonesia, setIsIndonesia] = useState(false);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);
	const { data: products } = useSubscription(getProductsQuery);
	console.log(products);
	const [deleteProductsById, { loading: loadingdelete }] = useMutation(
		deleteProductsByIdMutation
	);
	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			deleteProductsById({
				variables: {
					id,
				},
			});
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

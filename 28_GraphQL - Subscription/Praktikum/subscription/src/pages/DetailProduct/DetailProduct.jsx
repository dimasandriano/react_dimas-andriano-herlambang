import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetailProductsByUuidQuery } from "../../config/apollo/products";

const DetailProduct = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(getDetailProductsByUuidQuery, {
		variables: { uuid: id },
	});

	if (loading) return <p>loading...</p>;
	if (error) return console.log(error);
	const product = data.products[0];

	return (
		<div>
			<div className="d-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-25 p-5 rounded shadow">
					<Link to="/createproduct">
						<button className="btn btn-primary mb-3">Kembali</button>
					</Link>
					<p>id : {product.uuid}</p>
					<p>Nama Product : {product.productName}</p>
					<p>Category : {product.productCategory}</p>
					<p>Freshness : {product.productFreshness}</p>
					<p>Description : {product.productDescription}</p>
					<p>Price : ${product.productPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;

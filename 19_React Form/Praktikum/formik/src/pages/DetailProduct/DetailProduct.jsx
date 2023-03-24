import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailProduct = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(JSON.parse(localStorage.getItem("products")));
	}, []);

	return (
		<div>
			{products.map((product) => (
				<div key={product.id}>
					{product.id == id && (
						<div className="d-flex min-vh-100 justify-content-center align-items-center">
							<div className="w-25 p-5 rounded shadow">
								<Link to="/createproduct">
									<button className="btn btn-primary mb-3">Kembali</button>
								</Link>
								<p>id : {product.id}</p>
								<p>Nama Product : {product.productName}</p>
								<p>Category : {product.productCategory}</p>
								<p>Image : {product.productImage}</p>
								<p>Freshness : {product.productFreshness}</p>
								<p>Description : {product.productDescription}</p>
								<p>Price : ${product.productPrice}</p>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default DetailProduct;

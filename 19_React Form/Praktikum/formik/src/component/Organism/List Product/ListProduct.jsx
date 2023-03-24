import React from "react";
import { Link } from "react-router-dom";
const ListProduct = ({ products, handleDelete }) => {
	return (
		<div>
			<section id="list product">
				<div className="container">
					<h2 className="text-center fw-bold fs-2">List Product</h2>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">No UUID</th>
								<th scope="col">Product Name</th>
								<th scope="col">Product Category</th>
								<th scope="col">Product Image</th>
								<th scope="col">Product Freshness</th>
								<th scope="col">Product Description</th>
								<th scope="col">Product Price</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product.id}>
									<th scope="col">{product.id}</th>
									<th scope="col">{product.productName}</th>
									<th scope="col">{product.productCategory}</th>
									<th scope="col">{product.productImage}</th>
									<th scope="col">{product.productFreshness}</th>
									<th scope="col">{product.productDescription}</th>
									<th scope="col">{product.productPrice}</th>
									<th>
										<button className="btn btn-outline-primary me-2">
											<Link
												to={`/detailproduct/${product.id}`}
												className="text-decoration-none">
												Detail
											</Link>
										</button>
										<button
											className="btn btn-outline-danger"
											onClick={() => handleDelete(product.id)}>
											Delete
										</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default ListProduct;

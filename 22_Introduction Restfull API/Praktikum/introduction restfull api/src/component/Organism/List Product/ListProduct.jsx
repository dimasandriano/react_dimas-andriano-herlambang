import React from "react";
import { Link } from "react-router-dom";
const ListProduct = ({ products, handleDelete }) => {
	return (
		<div>
			<section id="list product">
				<div className="container-md">
					<h2 className="text-center fw-bold fs-2 mb-4 mt-5">List Product</h2>
					<div className="table-responsive">
						<table className="table tabletable-sm">
							<thead>
								<tr>
									<th scope="col">UUID</th>
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
								{products &&
									products.map((product, idx) => (
										<tr key={idx}>
											<td scope="col">{product.uuid}</td>
											<td scope="col">{product.productName}</td>
											<td scope="col">{product.productCategory}</td>
											<td scope="col">{product.productImage}</td>
											<td scope="col">{product.productFreshness}</td>
											<td scope="col">{product.productDescription}</td>
											<td scope="col">{product.productPrice}</td>
											<td className="d-flex">
												<button className="btn btn-outline-primary me-2">
													<Link
														to={`/detailproduct/${product.uuid}`}
														className="text-decoration-none">
														Detail
													</Link>
												</button>
												<button className="btn btn-outline-warning me-2">
													<Link
														to={`/editproduct/${product.uuid}`}
														className="text-decoration-none">
														Edit
													</Link>
												</button>
												<button
													className="btn btn-outline-danger"
													onClick={() => handleDelete(product.uuid)}>
													Delete
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ListProduct;

import React from "react";

export const ListProduct = () => {
	return (
		<div>
			<section id="list product">
				<div className="container">
					<h2 className="text-center fw-bold fs-2">List Product</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Product Name</th>
								<th scope="col">product category</th>
								<th scope="col">Image of Product</th>
								<th scope="col">Product Freshness</th>
								<th scope="col">Additional Description</th>
								<th scope="col">Product Price</th>
							</tr>
						</thead>
						<tbody id="dataTable"></tbody>
					</table>
					<input
						type="text"
						className="form-control w-25 mb-3"
						id="search"
						placeholder="Search..."
					/>
					<button className="btn btn-danger me-3" id="delete">
						Delete
					</button>
					<button className="btn btn-primary" id="btnSearch">
						Search
					</button>
					<br />
					<br />
				</div>
			</section>
		</div>
	);
};

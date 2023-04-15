import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { getProductsQuery } from "../../../config/apollo/products";

const CardList = () => {
	const [limit, setLimit] = useState(4);
	const { data: products } = useQuery(getProductsQuery);
	const handleLoadMore = () => {
		setLimit(limit + 4);
	};
	return (
		<div>
			<div className="container">
				<div class="input-group mb-3 pt-4">
					<input
						type="text"
						class="form-control"
						placeholder="masukkan nama product..."
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<button class="btn btn-outline-secondary" type="button" id="button-addon2">
						Search
					</button>
				</div>
				<div className="row gap-2 gap-md-0  mb-3">
					{products?.products.slice(0, limit).map((item, idx) => (
						<div key={idx} className="col-md-3">
							<div className="card">
								<img
									src="https://placehold.co/600x400"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.productName}</h5>
									<p className="card-text">{item.productDescription}</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				{products?.products.length > limit && (
					<button onClick={handleLoadMore} className="btn btn-primary">
						Load More
					</button>
				)}
			</div>
		</div>
	);
};
export default CardList;

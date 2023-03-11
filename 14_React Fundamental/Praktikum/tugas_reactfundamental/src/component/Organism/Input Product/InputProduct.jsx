import React from "react";
import logoBS from "../../../assets/bootstrap-logo.png";
import "./InputProduct.style.css";

export const InputProduct = () => {
	return (
		<div>
			<section id="main">
				<div className="row">
					<div className="col-lg-6 mx-auto p-4">
						<div className="text-center mb-5">
							<img src={logoBS} alt="bootstrap logo" />
							<h1 className="fw-medium fs-2">Create Product</h1>
							<p className="fw-lighter lh-base">
								Below is an example form built entirely with Bootstrap’s form controls.
								Each required form group has a validation state that can be triggered by
								attempting to submit the form without completing it.
							</p>
						</div>
						<div>
							<form action="" className="needs-validation" id="form" noValidate="">
								<h2 className="fs-3 fw-medium">Detail Product</h2>
								<div className="mb-3 w-50">
									<label htmlFor="name" className="form-label">
										Product name
									</label>
									<input type="text" className="form-control" id="name" required="" />
									<div className="invalid-feedback">Please add a product name.</div>
								</div>
								<div className="mb-3 w-50">
									<label htmlFor="category" className="form-label">
										Product Category
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id="category"
										required="">
										<option value={1}>One</option>
										<option value={2}>Two</option>
										<option value={3}>Three</option>
									</select>
									<div className="invalid-feedback">
										Please choose a product category.
									</div>
								</div>
								<div className="mb-3 w-50">
									<label htmlFor="file" className="form-label">
										Image of Product
									</label>
									<input type="file" className="form-control" id="file" required="" />
									<div className="invalid-feedback">Please choose a image product.</div>
								</div>
								<div className="mb-3">
									<label htmlFor="freshness" className="form-label">
										Product Freshness
									</label>
									<div id="form-check has-validation">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="freshness"
												id="freshness"
												defaultValue="Brand New"
												defaultChecked=""
											/>
											<label className="form-check-label" htmlFor="brandnew">
												Brand New
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="freshness"
												id="freshness"
												defaultValue="Second Hand"
											/>
											<label className="form-check-label" htmlFor="secondhand">
												Second Hand
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="freshness"
												id="freshness"
												defaultValue="Refurbished"
											/>
											<label className="form-check-label" htmlFor="Refurbished">
												Refurbished
											</label>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<label htmlFor="desc" className="form-label">
										Additional Description
									</label>
									<textarea
										className="form-control"
										id="desc"
										rows={5}
										required=""
										defaultValue={""}
									/>
									<div className="invalid-feedback">Please add a desc.</div>
								</div>
								<div className="mb-3 w-25">
									<label htmlFor="price" className="form-label">
										Product Price
									</label>
									<input
										className="form-control"
										type="number"
										name="price"
										id="price"
										placeholder=" $ 1"
										required=""
									/>
									<div className="invalid-feedback">Please add a product price.</div>
								</div>
								<button
									type="submit"
									className="btn btn-primary w-100"
									id="btn"
									disabled=""
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									data-bs-title="Submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

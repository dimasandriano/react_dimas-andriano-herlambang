import React from "react";
import logoBS from "../../../assets/bootstrap-logo.png";
import "./InputProduct.style.css";

const InputProduct = ({ article, bahasa, gantiBahasa, formik }) => {
	return (
		<div>
			<section id="main">
				<div className="row">
					<div className="col-lg-6 mx-auto p-4">
						<div className="text-center mb-5">
							<img src={logoBS} alt="bootstrap logo" />
							<h1 className="fw-medium fs-2">
								{bahasa ? article.title.id : article.title.en}
							</h1>
							<p className="fw-lighter lh-base">
								{bahasa ? article.description.id : article.description.en}
							</p>
							<button className="btn btn-primary" onClick={gantiBahasa}>
								{bahasa ? "Ganti Bahasa" : "Change Language"}
							</button>
						</div>
						<div>
							<form action="" className="needs-validation" id="form" noValidate="">
								<h2 className="fs-3 fw-medium">Detail Product</h2>
								<div className="mb-3 w-50">
									<label htmlFor="name" className="form-label">
										Product name
									</label>
									<input
										type="text"
										className={`form-control ${
											formik.errors.productName && `is-invalid`
										} `}
										id="name"
										required
										name="productName"
										value={formik.values.productName}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">{formik.errors.productName}</div>
								</div>
								<div className="mb-3 w-50">
									<label htmlFor="category" className="form-label">
										Product Category
									</label>
									<select
										className={`form-control ${
											formik.errors.productCategory && `is-invalid`
										} `}
										aria-label="Default select example"
										id="category"
										required=""
										name="productCategory"
										value={formik.values.productCategory}
										onChange={formik.handleChange}>
										<option value={""}>...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<div className="invalid-feedback">{formik.errors.productCategory}</div>
								</div>
								<div className="mb-3 w-50">
									<label htmlFor="file" className="form-label">
										Image of Product
									</label>
									<input
										type="file"
										className={`form-control ${
											formik.errors.productImage && `is-invalid`
										} `}
										id="file"
										required=""
										name="productImage"
										value={formik.values.productImage}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">{formik.errors.productImage}</div>
								</div>
								<div className="mb-3">
									<label htmlFor="freshness" className="form-label">
										Product Freshness
									</label>
									<div
										id="form-check has-validation"
										className={`form-control ${
											formik.errors.productFreshness && `is-invalid`
										} `}>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												id="brandnew"
												value={"Brand New"}
												name="productFreshness"
												onChange={formik.handleChange}
												checked={"Brand New" === formik.values.productFreshness}
											/>
											<label className="form-check-label" htmlFor="brandnew">
												Brand New
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												id="secondhand"
												value={"Second Hand"}
												name="productFreshness"
												onChange={formik.handleChange}
												checked={"Second Hand" === formik.values.productFreshness}
											/>
											<label className="form-check-label" htmlFor="secondhand">
												Second Hand
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												id="refurbished"
												value={"Refurbished"}
												name="productFreshness"
												onChange={formik.handleChange}
												checked={"Refurbished" === formik.values.productFreshness}
											/>
											<label className="form-check-label" htmlFor="refurbished">
												Refurbished
											</label>
										</div>
									</div>
									<div className="invalid-feedback">
										{formik.errors.productFreshness}
									</div>
								</div>
								<div className="mb-3">
									<label htmlFor="desc" className="form-label">
										Additional Description
									</label>
									<textarea
										className={`form-control ${
											formik.errors.productDescription && `is-invalid`
										} `}
										id="desc"
										rows={5}
										required=""
										name="productDescription"
										value={formik.values.productDescription}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">
										{formik.errors.productDescription}
									</div>
								</div>
								<div className="mb-3 w-25">
									<label htmlFor="price" className="form-label">
										Product Price
									</label>
									<input
										className={`form-control ${
											formik.errors.productPrice && `is-invalid`
										} `}
										type="number"
										id="price"
										placeholder=" $ 1"
										required=""
										name="productPrice"
										value={formik.values.productPrice}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">{formik.errors.productPrice}</div>
								</div>
								<button
									type="submit"
									className="btn btn-primary w-100"
									id="btn"
									onClick={formik.handleSubmit}>
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

export default InputProduct;

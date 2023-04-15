import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../component/Organism/Navbar/Navbar";
import { useMutation, useQuery } from "@apollo/client";
import {
	getDetailProductsByUuidQuery,
	updateProductByUuidMutation,
} from "../../config/apollo/products";

const EditProduct = () => {
	const { id } = useParams();
	const { loading: loadingquery, data: editdata } = useQuery(
		getDetailProductsByUuidQuery,
		{
			variables: { uuid: id },
		}
	);

	const [updateProduct, { loading: loadingupdate }] = useMutation(
		updateProductByUuidMutation
	);

	const product = editdata ? editdata.products[0] : [];
	const formik = useFormik({
		initialValues: {
			uuid: id,
			productName: product.productName,
			productCategory: product.productCategory,
			productFreshness: product.productFreshness,
			productDescription: product.productDescription,
			productPrice: product.productPrice,
		},
		validationSchema: Yup.object().shape({
			productName: Yup.string().min(5, "Must be 5 characters or less").required(),
		}),
		onSubmit: (values) => {
			console.log(values);
			updateProduct({
				variables: {
					uuid: id,
					productName: values.productName,
					productCategory: values.productCategory,
					productFreshness: values.productFreshness,
					productDescription: values.productDescription,
					productPrice: values.productPrice,
				},
			});
		},
	});
	useEffect(() => {
		formik.values.productName = product.productName;
		formik.values.productCategory = product.productCategory;
		formik.values.productFreshness = product.productFreshness;
		formik.values.productDescription = product.productDescription;
		formik.values.productPrice = product.productPrice;
	}, [product]);
	if (loadingquery) return console.log({ loadingquery });
	return (
		<div>
			<Navbar />
			<div className="row">
				<div className="col-lg-6 mx-auto p-4">
					<Link to="/createproduct">
						<button className="btn btn-primary mb-3">Kembali</button>
					</Link>
					<p>id : {product.uuid}</p>
					<form onSubmit={formik.handleSubmit}>
						<div className="mb-3 w-50">
							<label htmlFor="productName" className="form-label">
								Nama Product
							</label>
							<input
								type="text"
								className="form-control"
								name="productName"
								id="productName"
								defaultValue={product.productName}
								value={formik.values.productName}
								onChange={formik.handleChange}
							/>
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
								defaultValue={product.productCategory}
								value={formik.values.productCategory}
								onChange={formik.handleChange}>
								<option value={""}>...</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
							<div className="invalid-feedback">{formik.errors.productCategory}</div>
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
							<div className="invalid-feedback">{formik.errors.productFreshness}</div>
						</div>
						<div className="mb-3 w-50">
							<label htmlFor="productDescription" className="form-label">
								Description
							</label>
							<input
								type="text"
								className="form-control"
								name="productDescription"
								id="productDescription"
								defaultValue={product.productDescription}
								value={formik.values.productDescription}
								onChange={formik.handleChange}
							/>
						</div>
						<div className="mb-3 w-50">
							<label htmlFor="productPrice" className="form-label">
								Harga
							</label>
							<input
								type="text"
								className="form-control"
								name="productPrice"
								id="productPrice"
								defaultValue={product.productPrice}
								value={formik.values.productPrice}
								onChange={formik.handleChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Edit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProduct;

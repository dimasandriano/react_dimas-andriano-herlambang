import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as Yup from "yup";
import { useProductSelector } from "../../config/redux/product/productSelector";
import { productAction } from "../../config/redux/product/productSlice";
import Navbar from "../../component/Organism/Navbar/Navbar";

const EditProduct = () => {
	const { id } = useParams();
	const products = useProductSelector();
	const product = products.find((productData) => productData.uuid == id);
	const regex = /^[^\s][\w\s]*[^\s\W]$/;
	const dispatch = useDispatch();
	const nomorIndex = products.findIndex((product) => {
		return product.uuid === id;
	});
	const formik = useFormik({
		initialValues: {
			uuid: product.uuid,
			productName: product.productName,
			productCategory: product.productCategory,
			productImage: product.productImage,
			productFreshness: product.productFreshness,
			productDescription: product.Description,
			productPrice: product.productPrice,
		},
		validationSchema: Yup.object().shape({
			productName: Yup.string()
				.min(5, "Must be 5 characters or less")
				.required()
				.matches(
					regex,
					"Tidak boleh ada symbol dan tidak boleh diawali dan diakhiri dengan spasi"
				),
		}),
		onSubmit: (values) => {
			const productBaru = products.slice();
			productBaru.splice(nomorIndex, 1, {
				uuid: product.uuid,
				...values,
			});
			dispatch(productAction.update([...productBaru]));
			alert("Berhasil Mengedit Data");
		},
	});
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

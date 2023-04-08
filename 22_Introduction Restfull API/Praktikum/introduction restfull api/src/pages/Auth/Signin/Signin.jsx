import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Navbar from "../../../component/Organism/Navbar/Navbar";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Isi email dengan benar").required(),
			password: Yup.string().min(8, "Minimal panjang password 8").required(),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			formik.resetForm();
		},
	});
	return (
		<div>
			<Navbar />
			<div className="d-md-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-full w-md-50 p-5 rounded shadow">
					<form>
						<h1 className="text-center fs-3 mb-3">Sign In</h1>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className={`form-control ${formik.errors.email && `is-invalid`} `}
								id="email"
								placeholder="name@example.com"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
							<div className="invalid-feedback">{formik.errors.email}</div>
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								className={`form-control ${formik.errors.password && `is-invalid`} `}
								id="password"
								placeholder="password"
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
							<div className="invalid-feedback">{formik.errors.password}</div>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
							onClick={formik.handleSubmit}>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Signup;

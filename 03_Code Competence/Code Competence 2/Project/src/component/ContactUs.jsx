import React from "react";

const ContactUs = ({ formik }) => {
	return (
		<div>
			<div id="contactus" className="container">
				<div className="row p-md-5 p-2">
					<div className="col-md-6 p-3">
						<h1>Contact Us</h1>
						<p className="fw-lighter fs-6">
							Jika Anda memiliki pertanyaan, saran, atau ingin menghubungi kami untuk
							keperluan bisnis, silakan mengisi formulir ini. <br /> Kami sangat
							menghargai setiap masukan dan pertanyaan yang Anda berikan untuk membantu
							kami meningkatkan pelayanan kami kepada pembaca. Terima kasih telah
							mengunjungi Nightly!
						</p>
					</div>
					<div className="col-md-6">
						<form>
							<div className="row mb-3">
								<div className="col-md-6">
									<label htmlFor="firstname" className="form-label">
										Nama Depan
									</label>
									<input
										type="text"
										className="form-control bg-dark-subtle"
										id="firstname"
										required=""
										name="firstname"
										value={formik.values.firstname}
										onChange={formik.handleChange}
									/>
									<div className="text-danger" style={{ fontSize: "14px" }}>
										{formik.errors.firstname}
									</div>
								</div>
								<div className="col-md-6">
									<label htmlFor="lastname" className="form-label">
										Nama Belakang
									</label>
									<input
										type="text"
										className="form-control bg-dark-subtle"
										id="lastname"
										required=""
										name="lastname"
										value={formik.values.lastname}
										onChange={formik.handleChange}
									/>
									<div className="text-danger" style={{ fontSize: "14px" }}>
										{formik.errors.lastname}
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control bg-dark-subtle"
									id="email"
									required=""
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								<div className="text-danger" style={{ fontSize: "14px" }}>
									{formik.errors.email}
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="desc" className="form-label">
									Pertanyaan atau Saran
								</label>
								<textarea
									className="form-control bg-dark-subtle"
									id="desc"
									rows={5}
									name="saran"
									value={formik.values.saran}
									onChange={formik.handleChange}
								/>
								<div className="text-danger" style={{ fontSize: "14px" }}>
									{formik.errors.saran}
								</div>
							</div>
							<button
								type="submit"
								className="btn btn-light"
								onClick={formik.handleSubmit}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactUs;

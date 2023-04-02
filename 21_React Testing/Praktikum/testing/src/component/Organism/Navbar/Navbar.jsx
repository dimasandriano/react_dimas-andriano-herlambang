import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const navigate = useNavigate();

	const handlerCreateProduct = () => {
		navigate("/createproduct");
	};
	const handlerHome = () => {
		navigate("/");
	};
	const handlerSignup = () => {
		navigate("/signup");
	};
	const handlerSignin = () => {
		navigate("/signin");
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-white shadow-sm">
				<div className="container">
					<a className="navbar-brand fw-bold" href="#">
						Simple Header
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="me-auto"></ul>
						<div>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item me-0 me-md-3 mb-2 mb-md-0">
									<a
										className="nav-link btn btn-primary text-white"
										aria-current="page"
										onClick={handlerHome}>
										Home
									</a>
								</li>
								<li className="nav-item me-0 me-md-3 mb-2 mb-md-0">
									<a
										className="nav-link btn btn-primary text-white"
										href="#"
										onClick={handlerCreateProduct}>
										Create Product
									</a>
								</li>
								<li className="nav-item me-0 me-md-3 mb-2 mb-md-0">
									<a
										className="nav-link btn btn-primary text-white"
										aria-current="page"
										onClick={handlerSignin}>
										Signin
									</a>
								</li>
								<li className="nav-item me-0 me-md-3 mb-2 mb-md-0">
									<a
										className="nav-link btn btn-primary text-white"
										aria-current="page"
										onClick={handlerSignup}>
										Signup
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-primary" href="#">
										Features
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-primary" href="#">
										Pricing
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-primary" href="#">
										FAQs
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-primary" href="#">
										About
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

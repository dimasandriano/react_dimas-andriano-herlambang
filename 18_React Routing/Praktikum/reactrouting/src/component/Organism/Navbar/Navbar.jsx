import React from "react";
import "./Navbar.style.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Simple Header
					</a>
					<Link to="/">Landing Page</Link>
					<Link to="/createproduct">Create Product</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									FAQs
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
						</ul>
					</div>
					<div id="nav-items-right">
						<a href="#" className="btn btn-primary mx-1">
							Home
						</a>
						<a href="#" className="text-decoration-none mx-1">
							Features
						</a>
						<a href="#" className="text-decoration-none mx-1">
							Pricing
						</a>
						<a href="#" className="text-decoration-none mx-1">
							FAQs
						</a>
						<a href="#" className="text-decoration-none mx-1">
							About
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

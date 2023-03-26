import React from "react";
import nightly from "../assets/nightly.png";
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-transparent shadow-sm">
				<div className="container">
					<img src={nightly} alt="" style={{ height: 40 }} />
					<button
						className="navbar-toggler bg-white"
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
								<li className="nav-item">
									<a className="nav-link text-white" href="" aria-current="page">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Features
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Pricing
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										FAQs
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
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

import React from "react";

const Footer = () => {
	return (
		<div>
			<hr />
			<footer>
				<div id="footeratas">
					<div className="container">
						<div className="row d-flex align-items-center p-2 border-bottom">
							<div className="col-md-6">
								<span className="fs-6">Get connected with us on social networks:</span>
							</div>
							<div className="col-md-6 d-flex justify-content-md-end">
								<a
									href="https://facebook.com/dimas.andriano.h"
									className="fs-3 me-3 text-white"
									target="_blank">
									<i className="bi bi-facebook" />
								</a>
								<a
									href="https://instagram.com/dimas.andriano.h"
									className="fs-3 me-3 text-white"
									target="_blank">
									<i className="bi bi-instagram" />
								</a>
								<a
									href="https://github.com/dimasandriano"
									className="fs-3 me-3 text-white"
									target="_blank">
									<i className="bi bi-github" />
								</a>
								<a
									href="https://t.me/dimasandriano"
									className="fs-3 me-3 text-white"
									target="_blank">
									<i className="bi bi-telegram" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="footertengah">
					<div className="container">
						<div className="row p-3 border-bottom">
							<div className="col-md-3">
								<h3>PT. Kambing</h3>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
									laborum quasi alias voluptas. Et animi qui soluta quaerat impedit quo
									magni ex ipsum ullam autem!
								</p>
							</div>
							<div className="col-md-3">
								<h3>Product</h3>
								<div className="d-flex flex-column">
									<a href="#" className="text-decoration-none text-white">
										HTML
									</a>
									<a href="#" className="text-decoration-none text-white">
										CSS
									</a>
									<a href="#" className="text-decoration-none text-white">
										Javascript
									</a>
									<a href="#" className="text-decoration-none text-white">
										Bootstrap
									</a>
									<a href="#" className="text-decoration-none text-white">
										React
									</a>
								</div>
							</div>
							<div className="col-md-3">
								<h3>Usefull Links</h3>
								<div className="d-flex flex-column">
									<a href="#" className="text-decoration-none text-white">
										Home
									</a>
									<a href="#" className="text-decoration-none text-white">
										About
									</a>
									<a href="#" className="text-decoration-none text-white">
										Skills
									</a>
									<a href="#" className="text-decoration-none text-white">
										Organitazion
									</a>
									<a href="#" className="text-decoration-none text-white">
										Resume
									</a>
								</div>
							</div>
							<div className="col-md-3">
								<h3>Contact</h3>
								<div className="d-flex flex-column">
									<a href="#" className="text-decoration-none text-white">
										<i className="bi bi-house-door-fill me-2" />
										Blitar
									</a>
									<a href="#" className="text-decoration-none text-white">
										<i className="bi bi-envelope-at-fill me-2" />
										dimas.andriano.h@gmail.com
									</a>
									<a href="#" className="text-decoration-none text-white">
										<i className="bi bi-telephone-fill me-2" />
										089601650936
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="footerbawah">
					<div className="d-flex justify-content-center align-items-center p-3">
						<span className="fs-6">
							© 2023 Copyright:{" "}
							<a
								href="https://github.com/dimasandriano"
								target="_blank"
								className="text-decoration-none fw-bold text-white">
								Dimas Andriano
							</a>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

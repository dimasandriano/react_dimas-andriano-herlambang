import React from "react";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="row pt-5 pb-5 p-3">
					<div className="col-md-3">
						<h1 className="fs-3" style={{ color: "#37517E" }}>
							ARSHA
						</h1>
						<p>
							A108 Adam Street <br />
							New York, NY 535022 <br />
							United States <br /> <br />
							<span>Phone:</span> +1 5589 55488 55 <br />
							<span>Email:</span> info@example.com
						</p>
					</div>
					<div className="col-md-3">
						<h2 className="fs-5" style={{ color: "#37517E" }}>
							Useful Links
						</h2>
						<ul className="list-unstyled ms-3">
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Home
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									About us
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Services
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Terms of Service
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h2 className="fs-5" style={{ color: "#37517E" }}>
							Our Services
						</h2>
						<ul className="list-unstyled ms-3">
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Web Design
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Web Development
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Product Management
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Marketing
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-black">
									Graphic Design
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h2 className="fs-5" style={{ color: "#37517E" }}>
							Our Social Networks
						</h2>
						<p>
							Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
							valies
						</p>
						<div className="d-flex">
							<a
								href=""
								className="p-3 me-1 rounded-circle"
								style={{ backgroundColor: "#47B2E4" }}></a>
							<a
								href=""
								className="p-3 me-1 rounded-circle"
								style={{ backgroundColor: "#47B2E4" }}></a>
							<a
								href=""
								className="p-3 me-1 rounded-circle"
								style={{ backgroundColor: "#47B2E4" }}></a>
							<a
								href=""
								className="p-3 me-1 rounded-circle"
								style={{ backgroundColor: "#47B2E4" }}></a>
							<a
								href=""
								className="p-3 me-1 rounded-circle"
								style={{ backgroundColor: "#47B2E4" }}></a>
						</div>
					</div>
				</div>
			</div>
			<div style={{ backgroundColor: "#37517E" }}>
				<div className="container d-flex justify-content-between align-items-center pt-3">
					<p className=" text-white">
						© Copyright <span className="fw-bold">Arsha.</span> All Rights Reserved
					</p>
					<p className=" text-white">
						Designed by{" "}
						<a href="#" className="text-decoration-none" style={{ color: "#47B2E4" }}>
							BootstrapMade
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

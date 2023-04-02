import React from "react";
import HeroImg from "../../../assets/hero-img.png";
const Hero = () => {
	return (
		<div style={{ backgroundColor: "#37517E" }}>
			<div className="container">
				<div className="row min-vh-100 d-flex align-items-center p-3">
					<div className="col-md-6">
						<h1 className="fs-1 fw-bold text-white">
							Better Solutions For Your <br /> Business
						</h1>
						<p className="fs-5 fw-light text-white">
							We are team of talented designers making websites with <br /> Bootstrap
						</p>
						<br />
						<a
							href="#"
							className="btn rounded-pill text-white me-5"
							style={{ backgroundColor: "#47B2E4" }}>
							Get Started
						</a>
						<a href="#" className="text-white text-decoration-none">
							Watch Video
						</a>
					</div>
					<div className="col-md-6">
						<img src={HeroImg} alt="heroimg" title="heroimg" className="w-100" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;

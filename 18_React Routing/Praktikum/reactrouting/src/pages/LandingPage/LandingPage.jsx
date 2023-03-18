import React from "react";
import "./LandingPage.style.css";
import HeroImg from "../../assets/hero-img.png";
import { Navbar } from "../../component/Organism/Navbar/Navbar";
export const LandingPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<div className="hero container">
					<div className="hero-left">
						<h1>
							<b>
								Better Solutions For Your <br /> Business
							</b>
						</h1>
						<p>
							We are team of talented designers making websites with <br /> Bootstrap
						</p>
						<br />
						<a href="#" className="btn-started">
							Get Started
						</a>
						<a href="#">Watch Video</a>
					</div>
					<div className="hero-right">
						<img src={HeroImg} alt="heroimg" title="heroimg" width={500} />
					</div>
				</div>
			</main>
			<footer>
				<div className="newsletter">
					<div className="newsletter-text">
						<h2>
							<b>Join Our Newsletter</b>
						</h2>
						<p>
							Tamen quem nulla quae legam multos aute sint culpa legam noster magna
						</p>
						<form action="">
							<input id="insubs" type="text" required="" />
							<button id="subs" type="submit">
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<div className="footer-social container">
					<div className="alamat">
						<h1>ARSHA</h1>
						<p>
							A108 Adam Street <br />
							New York, NY 535022 <br />
							United States <br /> <br />
							<span>Phone:</span> +1 5589 55488 55 <br />
							<span>Email:</span> info@example.com
						</p>
					</div>
					<div className="useful">
						<h2>Useful Links</h2>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div className="services">
						<h2>Our Services</h2>
						<ul>
							<li>
								<a href="#">Web Design</a>
							</li>
							<li>
								<a href="#">Web Development</a>
							</li>
							<li>
								<a href="#">Product Management</a>
							</li>
							<li>
								<a href="#">Marketing</a>
							</li>
							<li>
								<a href="#">Graphic Design</a>
							</li>
						</ul>
					</div>
					<div className="socialnetwork">
						<h2>Our Social Networks</h2>
						<p>
							Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
							valies
						</p>
						<div className="social-account">
							<a href="" />
							<a href="" />
							<a href="" />
							<a href="" />
							<a href="" />
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container copyright-text">
						<div className="copyright-left">
							© Copyright <span>Arsha.</span> All Rights Reserved
						</div>
						<div className="copyright-right">
							Designed by <a href="#">BootstrapMade</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

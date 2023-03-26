import React from "react";
import bg from "../assets/bg.jpg";
const Hero = () => {
	return (
		<div>
			<div
				id="hero"
				className="position-relative p-md-5 p-3 "
				style={{
					backgroundImage: "url(" + bg + ")",
					backgroundSize: "cover",
					height: "400px",
				}}>
				<div className="text-center w-100 md-w-50 mx-auto">
					<h1 className="fw-bold text-white fs-1 lh-lg">Welcome To Nightly</h1>
					<p className="text-white fw-light">
						Kami adalah situs berita yang menyajikan informasi terbaru seputar
						peristiwa malam hari. Kami memahami bahwa waktu adalah hal yang berharga,
						oleh karena itu kami berkomitmen untuk memberikan berita terkini dengan
						ringkas dan padat <br /> <br />
						<button className="btn btn-outline-light">Baca Selanjutnya</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;

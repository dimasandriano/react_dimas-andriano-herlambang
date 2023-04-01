import React from "react";

const JoinUs = () => {
	return (
		<div className="p-5" style={{ backgroundColor: "#F3F5FA" }}>
			<div className="d-flex justify-content-center">
				<div className="text-center">
					<h2>
						<b>Join Our Newsletter</b>
					</h2>
					<p>
						Tamen quem nulla quae legam multos aute sint culpa legam noster magna
					</p>
					<form action="">
						<div className="input-group mb-3 position-relative">
							<input
								type="text"
								className="form-control rounded-pill z-0"
								aria-describedby="button-addon2"
							/>
							<button
								className="btn rounded-pill position-absolute end-0 z-1 text-white"
								type="button"
								style={{ backgroundColor: "#47B2E4" }}
								id="button-addon2">
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;

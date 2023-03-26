import React from "react";
import aboutus from "../assets/aboutus.jpg";
const AboutUs = () => {
	return (
		<div>
			<hr />
			<div className="p-3 container">
				<h1 className="text-center fw-bold mb-3">About Us</h1>
				<div className="row">
					<div className="col-md-6">
						<img src={aboutus} alt="" className="img-fluid" />
					</div>
					<div className="col-md-6">
						<p>
							Selamat datang di situs berita kami, yang telah berdedikasi untuk
							memberikan informasi terbaru seputar peristiwa malam hari di seluruh
							dunia. Kami memahami bahwa banyak kejadian penting yang terjadi pada
							malam hari, dan itulah mengapa kami berkomitmen untuk memberikan liputan
							yang akurat dan terpercaya tentang semua hal yang terjadi di sekitar
							kita. <br /> Dengan tim jurnalis yang berpengalaman dan berpengetahuan
							luas, kami selalu berusaha untuk memberikan liputan mendalam tentang
							berbagai peristiwa penting yang terjadi pada malam hari. Mulai dari
							berita kriminal, kecelakaan, hingga acara budaya dan hiburan, kami akan
							selalu menyajikan informasi terbaru yang dapat menjadi referensi bagi
							pembaca kami. <br /> Kami berharap dengan adanya situs berita kami,
							pembaca dapat mengakses informasi yang terbaru dan terpercaya tentang
							peristiwa-peristiwa penting yang terjadi pada malam hari di seluruh
							dunia. Terima kasih telah memilih kami sebagai sumber informasi Anda dan
							selalu kunjungi situs berita kami untuk informasi yang terbaru dan
							terpercaya.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutUs;

import React from "react";
import Footer from "../../component/Organism/Footer/Footer";
import Hero from "../../component/Organism/Hero/Hero";
import JoinUs from "../../component/Organism/JoinUs/JoinUs";
import Navbar from "../../component/Organism/Navbar/Navbar";
const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<JoinUs />
			<Footer />
		</>
	);
};

export default LandingPage;

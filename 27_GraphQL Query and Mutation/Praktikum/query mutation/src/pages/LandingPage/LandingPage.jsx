import React from "react";
import Footer from "../../component/Organism/Footer/Footer";
import Hero from "../../component/Organism/Hero/Hero";
import JoinUs from "../../component/Organism/JoinUs/JoinUs";
import Navbar from "../../component/Organism/Navbar/Navbar";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../config/apollo/products";
import CardList from "../../component/Organism/CardList/CardList";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<JoinUs />
			<CardList />
			<Footer />
		</>
	);
};

export default LandingPage;

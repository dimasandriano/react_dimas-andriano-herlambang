import React from "react";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Signup from "../../pages/Auth/Signup/Signup";
import Signin from "../../pages/Auth/Signin/Signin";
import CreateProduct from "../../pages/CreateProduct/CreateProduct";
import DetailProduct from "../../pages/DetailProduct/DetailProduct";
import EditProduct from "../../pages/EditProduct/EditProduct";

export const Routing = [
	{
		path: "/",
		element: <LandingPage />,
		isPrivate: false,
	},
	{
		path: "/createproduct",
		element: <CreateProduct />,
		isPrivate: true,
	},
	{
		path: "/detailproduct/:id",
		element: <DetailProduct />,
		isPrivate: true,
	},
	{
		path: "/editproduct/:id",
		element: <EditProduct />,
		isPrivate: true,
	},
	{
		path: "/signup",
		element: <Signup />,
		isPrivate: false,
	},
	{
		path: "/signin",
		element: <Signin />,
		isPrivate: false,
	},
];

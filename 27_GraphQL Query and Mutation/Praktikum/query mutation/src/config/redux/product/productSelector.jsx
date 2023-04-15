import { useSelector } from "react-redux";

export const useProductSelector = () =>
	useSelector((state) => state.products.products);
export const useTypeProductSelector = () =>
	useSelector((state) => state.products.type);

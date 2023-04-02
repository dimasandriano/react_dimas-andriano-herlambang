import React from "react";
import { describe, it } from "vitest";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { fireEvent, render, screen } from "@testing-library/react";
import store, { persiststore } from "../../../config/redux/store";
import { BrowserRouter } from "react-router-dom";
import InputProduct from "./InputProduct";
import Article from "../../../Article";

describe("Page Create product", () => {
	it("Validasi Product Name ", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct article={Article} />;
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("product-name-input");
		fireEvent.change(productName, { target: { value: "test" } });
		expect(screen.getByTestId("product-name-input").value).toBe("test");
	});
	it("Product Name Wajib diisi", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct article={Article} />;
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("product-name-input");
		const newProductName = "NewProduct";
		fireEvent.change(productName, { target: { value: newProductName } });
		expect(screen.getByTestId("product-name-input").value).toBe(newProductName);
		const productNameDisplay = screen.getByTestId("product-name-input");
		expect(productNameDisplay).toBeInTheDocument();
	});
	it("Product Name Tidak boleh mengandung simbol", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct article={Article} />;
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("product-name-input");
		fireEvent.change(productName, { target: { value: "@/#{}" } });
		const btn = screen.getByTestId("btn-submit");
		fireEvent.submit(btn);
		expect(screen.getByTestId("name-error").textContent).toBe(
			"Masukkan Nama minimal 5 huruf, tanpa simbol dan tidak boleh melebihi 25 huruf"
		);
	});
	it("Product Name Tidak boleh Melebihi 25", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct article={Article} />;
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("product-name-input");
		const btn = screen.getByTestId("btn-submit");
		fireEvent.change(productName, {
			target: { value: "DimasAndrianoHerlambangbambang" },
		});
		fireEvent.submit(btn);
		expect(screen.getByTestId("name-error").textContent).toBe(
			"Masukkan Nama minimal 5 huruf, tanpa simbol dan tidak boleh melebihi 25 huruf"
		);
	});
});

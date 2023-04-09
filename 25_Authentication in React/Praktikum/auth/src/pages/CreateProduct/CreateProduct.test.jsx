import { describe, it } from "vitest";
import CreateProduct, { formik } from "./CreateProduct";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persiststore } from "../../config/redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Page Create product", () => {
	it("Should Render correctly", () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persiststore}>
							<CreateProduct />;
						</PersistGate>
					</Provider>
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

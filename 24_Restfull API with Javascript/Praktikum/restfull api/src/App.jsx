import React from "react";
import RootRouting from "./config/router/RootRouting";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persiststore}>
				<RootRouting />;
			</PersistGate>
		</Provider>
	);
};

export default App;

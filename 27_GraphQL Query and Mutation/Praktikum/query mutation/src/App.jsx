import React from "react";
import RootRouting from "./config/router/RootRouting";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apollo";

const App = () => {
	return (
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persiststore}>
					<RootRouting />;
				</PersistGate>
			</Provider>
		</ApolloProvider>
	);
};

export default App;

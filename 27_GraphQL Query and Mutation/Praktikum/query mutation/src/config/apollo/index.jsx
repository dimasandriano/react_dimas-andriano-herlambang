import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: "https://ace-llama-12.hasura.app/v1/graphql",
		headers: {
			"x-hasura-admin-secret":
				"4mlAPmqk28EJUd1QeVuUNWHnSj2ec7r4Q0RNtmTd0yr4P1GFdDMWwri7CDt0iwP0",
		},
	}),
	cache: new InMemoryCache(),
});

export default apolloClient;

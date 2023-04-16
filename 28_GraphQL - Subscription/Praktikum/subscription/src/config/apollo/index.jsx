import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://ace-llama-12.hasura.app/v1/graphql",
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"4mlAPmqk28EJUd1QeVuUNWHnSj2ec7r4Q0RNtmTd0yr4P1GFdDMWwri7CDt0iwP0",
			},
		},
	})
);

const httpLink = new HttpLink({
	uri: "https://ace-llama-12.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"4mlAPmqk28EJUd1QeVuUNWHnSj2ec7r4Q0RNtmTd0yr4P1GFdDMWwri7CDt0iwP0",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const apolloClient = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default apolloClient;

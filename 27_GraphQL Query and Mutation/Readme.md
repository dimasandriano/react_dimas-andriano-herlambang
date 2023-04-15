# Summary

## GraphQL Query and Mutation

## Query with apollo client

- import gql aand useQuery then write your query, or you can copy from hasura console instead.
- Get initial data by doing query on the server, call useQuery in top of your code.
- Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.

## Mutation with Apollo CLient

- import useMutation hooks from apollo client and define mutation

## Mutation Insert Data with Apollo Client

- invoke useMutation using array destruction define mutation handler(insertTodo) and use it
- Call insertTodo with variables

## Mutation Update Data with Apollo CLient

- Define update query
- Create mutation handler for update todo
- Call update Query

## Mutation Delete Data with Apollo CLient

- Define delete query
- Create mutation handler for delete todo
- Call delete Query

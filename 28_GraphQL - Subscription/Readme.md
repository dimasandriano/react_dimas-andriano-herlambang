# Summary

## GraphQL Subscription

## Setting Subscription

- install subscriptions-transport-ws to enable websocket connection
  yarn add @apollo/client subscription-ransport-ws
- Import all needed modules and separate between http and websocket link

## Subscription

- Create httpLink for query and mutation. Add wsLink for subscription. Add header for authentication.
- Add split function and use as link when create client.

## Subscription using useSubscription

- Import useSubscription from apollo client and define subscription
- Invoke subscription and consume data.

## Subscription using subscribeToMore

A function that enables you to execute a subscription, usually to subscribe to specific fields that were included in the query

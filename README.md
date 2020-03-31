# react-node-graphql-postgres-typescript-template

A monorepo (using `yarn workspaces`) template for a web application using a React frontend, a NodeJS backend, and a GraphQL api for communicating between frontend and backend.

## Features

- `typescript` for type-checking
- `eslint` for linting
- `jest` for testing
- `prettier` (via `eslint`) for formatting
- Docker for containerization
- TravisCI for continuous integration

### Frontend

- `react` as the frontend framework
- `apollo-client` for GraphQL requests and data caching.
- `react-router` for url-based routing
- `parcel` for easy bundling

### Backend

- `apollo-server` for exposing the GraphQL api
- `type-graphql` for easily building a GraphQL api
- `typeorm` as a database abstraction layer

### Database

- Postgres

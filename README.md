# react-node-graphql-postgres-typescript-template

A monorepo (using `yarn workspaces`) template for a web application using a React frontend, a NodeJS backend, and a GraphQL api for communicating between frontend and backend.

## Features

- `typescript` for type-checking
- `eslint` for linting
- `jest` for testing
- `prettier` (via `eslint`) for formatting
- `husky` for git hooks, such as applying formatting pre commits and fetching latest yarn packages post merges
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
- Pgadmin to access the database visually

## Using

### Environment variables

In the root of the project, the frontend package, and the backend package, copy the `.env.example` to `.env` and fill in the variables.

### Development

To start the project in development mode, run

```
docker-compose up -d
```

in the root of the project.

#### Logs

To access the logs run

```
docker-compose logs -f frontend
```

or

```
docker-compose logs -f backend
```

in the root of the project

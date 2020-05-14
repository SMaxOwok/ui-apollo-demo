import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs, resolvers } from 'mockServer';

import App from './App';

import 'theme';

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const cache = new InMemoryCache();
const link = new SchemaLink({ schema: executableSchema });
const client = new ApolloClient({
  link,
  cache
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

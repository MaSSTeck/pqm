// const { ApolloServer, gql } = require('apollo-server');
// const typeDefs = require('./graphql/schema');
// const resolvers = require('./graphql/resolvers/index');

// const server = new ApolloServer({ typeDefs, resolvers });

// // This `listen` method launches a web-server.  Existing apps
// // can utilize middleware options, which we'll discuss later.
// server.listen({port:process.env.PORT || 3000}).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import { MvrpAPI } from './app/datasource/carsDataSource';
import { typeDefs } from './app/graph/schema';
import { resolvers } from './app/graph/resolvers/index';


const server = new ApolloServer({
    typeDefs,
    resolvers,
  dataSources: () => ({
    mvrpAPI: new MvrpAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

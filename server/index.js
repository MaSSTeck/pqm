import { ApolloServer, gql } from 'apollo-server';
import { QuestionAPI } from './app/datasource/questionsDataSource'
import { typeDefs } from './app/graph/schema';
import { resolvers } from './app/graph/resolvers/index';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            questionAPI: new QuestionAPI(),
        };
    },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

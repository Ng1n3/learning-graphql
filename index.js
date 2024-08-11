import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";

// server setup
const server = new ApolloServer({
  //typeDefs -- definitions of types of data to expose on our graph
  typeDefs,
  //resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log('Server ready at port', 4000)
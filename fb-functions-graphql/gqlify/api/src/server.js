const { Gqlify } = require("@gqlify/server");
const { FirestoreDataSource } = require("@gqlify/firestore");
const { ApolloServer } = require("apollo-server-express");
const { readFileSync } = require("fs");
const express = require("express");

// Read datamodel
const sdl = readFileSync(__dirname + "/demo.graphql", { encoding: "utf8" });

// construct gqlify
const gqlify = new Gqlify({
  // provide datamodel to gqlify
  sdl,

  // provide data-sources map to GQLify,
  // so GQLify would know how to create data-source for each model
  dataSources: {
    firestore: args => new FirestoreDataSource({ collection: args.key }),
  },
});

function gqlServer() {
  const app = express();

  // GQLify will provide GraphQL apis & resolvers to apollo-server
  const gqlifyConfig = gqlify.createApolloConfig();
  console.log("gqlify config:", gqlifyConfig);
  const server = new ApolloServer({
    ...gqlifyConfig,
    introspection: true,
    playground: true,
  });

  server.applyMiddleware({ app, path: "/", cors: true });

  return app;
}

export default gqlServer;

const { Gqlify } = require("@gqlify/server");
const { FirestoreDataSource } = require("@gqlify/firestore");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const { getSdl } = require("./sdl");

// construct gqlify
async function createGqlify() {
  // Read datamodel
  const sdl = await getSdl();
  console.log("creating sdl with ", sdl);
  const gqlify = new Gqlify({
    // provide datamodel to gqlify
    sdl,

    // provide data-sources map to GQLify,
    // so GQLify would know how to create data-source for each model
    dataSources: {
      firestore: args => new FirestoreDataSource({ collection: args.key }),
    },
    skipPrint: true,
  });

  return gqlify;
}

async function gqlServer() {
  const app = express();

  // GQLify will provide GraphQL apis & resolvers to apollo-server
  const gqlify = await createGqlify();
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

export { gqlServer };

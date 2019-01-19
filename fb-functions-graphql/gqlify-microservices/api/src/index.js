import { https } from "firebase-functions";

let server = null;

// graphql api
// https://us-central1-<project-name>.cloudfunctions.net/api/
// graphiql gui
// https://us-central1-<project-name>.cloudfunctions.net/api/graphql/
const api = https.onRequest(async (req, res) => {
  if (null === server) {
    const { gqlServer } = require("./server");
    console.info("creating server on first request for instance");
    server = await gqlServer();
  }
  return server(req, res);
});

export { api };

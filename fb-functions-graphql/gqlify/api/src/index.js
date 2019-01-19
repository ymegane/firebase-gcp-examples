import { https } from "firebase-functions";
import gqlServer from "./server";

const server = gqlServer();

// graphql api
// https://us-central1-<project-name>.cloudfunctions.net/api/
// graphiql gui
// https://us-central1-<project-name>.cloudfunctions.net/api/graphql/
const api = https.onRequest(server);

export { api };

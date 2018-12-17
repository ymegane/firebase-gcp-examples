const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");
const express = require("express");

const expressServer = express();

const config = {
  dev: process.env.NODE_ENV !== "production",
  buildDir: "dist/client",
};

const nuxt = new Nuxt(config);

expressServer.use(nuxt.render);

const server = functions.https.onRequest(expressServer);

const nuxtjs = {
  server,
};

export { nuxtjs };
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const path = require("path");

const SERVICE_ACCOUNT_PATH = "./config/firebase-service-account.json";
const PROJECT_ID = "blog-post-examples";
const SDL_BUCKET_NAME = "gqlify_sdls";
const SCHEMA_EXTENSION = ".graphql";

const storage = new Storage({
  projectId: PROJECT_ID,
  keyFilename: SERVICE_ACCOUNT_PATH,
});

function getSchemaFiles() {
  return fs.readdirSync(__dirname).filter(file => {
    return path.extname(file).toLowerCase() === SCHEMA_EXTENSION;
  });
}

async function uploadSchemas(schemaFiles) {
  console.log(`uploading *${SCHEMA_EXTENSION} files from ${__dirname}`);

  try {
    await Promise.all(
      schemaFiles.map(async filename => {
        console.log(`uploading ${filename}`);
        await storage
          .bucket(SDL_BUCKET_NAME)
          .upload(__dirname + "/" + filename, {
            gzip: true,
            metadata: { cacheControl: "no-cache" },
          });
      })
    );
  } catch (err) {
    console.error("Upload error: ", err);
  }

  console.log(`${schemaFiles} uploaded to ${SDL_BUCKET_NAME}.`);
}

uploadSchemas(getSchemaFiles());

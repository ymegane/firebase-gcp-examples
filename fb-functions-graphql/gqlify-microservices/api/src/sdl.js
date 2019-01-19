const admin = require("firebase-admin");

admin.initializeApp();
const SDL_BUCKET_NAME = "gqlify_sdls";

async function getSdl() {
  let sdl = ``;
  try {
    const [files] = await admin
      .storage()
      .bucket(SDL_BUCKET_NAME)
      .getFiles();
    await Promise.all(
      files.map(async (file, index) => {
        const contents = await file.download();
        sdl += " " + contents[0].toString();
      })
    );
  } catch (err) {
    console.error("failed to get storage files", err);
  }
  return sdl;
}

export { getSdl };

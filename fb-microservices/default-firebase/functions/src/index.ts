import { onNewUser } from "./auth/onNewUser";
import { onPost } from "./posts/onPost";

const posts = { onPost };
const users = { onNewUser };

export { posts, users };

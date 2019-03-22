import { onNewUser } from "./auth/onNewUser";
import { onPost } from "./posts/onPost";

const posts = { onPost };
const auth = { onNewUser };

export { posts, auth };

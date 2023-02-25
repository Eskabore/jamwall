import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// Get all posts
router.get("/", verifyToken, getFeedPosts); // Nowadays, feeds use ai to show you what you want to see

router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
// Like a post (or unlike)
router.patch("/:id/like", verifyToken, likePost);

export default router;
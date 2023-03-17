import express from "express";
import {
  update,
  deleteUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";

import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//update user
router.put("/:id", verifyToken, update);
//get a user
router.get("/find/:id", deleteUser);
//subscribe a user
router.put("/sub/:id", subscribe);
//unsubscribe a user
router.put("/unsub/:id", unsubscribe);
//like a video
router.put("/like/:videoId", like);
//dislike a video
router.put("/disklike/:videoId", dislike);
export default router;

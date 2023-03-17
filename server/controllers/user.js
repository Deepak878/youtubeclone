import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  console.log("oki");
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } //this update data
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log("error aayo");
    }
  } else {
    return next(createError(403, "You can update your account"));
  }
};
export const deleteUser = (req, res, next) => {};
export const getUser = (req, res, next) => {};
export const subscribe = (req, res, next) => {};
export const unsubscribe = (req, res, next) => {};
export const like = (req, res, next) => {};
export const dislike = (req, res, next) => {};

import { Router } from "express";
import TransactionModel from "../models/transaction.js";
import passport from "passport";
import * as TransactionController from "./../controller/TransactionController.js";

const router = Router();

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  TransactionController.index
);

router.post("/", TransactionController.create);

router.delete("/:id", TransactionController.destroy);

router.patch("/:id", TransactionController.update);

export default router;

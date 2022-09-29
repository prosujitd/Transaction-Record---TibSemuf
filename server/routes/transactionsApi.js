import { Router } from "express";
import TransactionModel from "../models/transaction.js";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const transaction = await TransactionModel.find({}).sort({ createdAt: -1 });
    res.json({ data: transaction });
  }
);

router.post("/", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new TransactionModel({
    amount,
    description,
    date,
  });
  await transaction.save();
  console.log(req.body);
  res.json({ message: req.body });
});

router.delete("/:id", async (req, res) => {
  await TransactionModel.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Success" });
});

router.patch("/:id", async (req, res) => {
  await TransactionModel.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json({ message: "Success" });
});

export default router;

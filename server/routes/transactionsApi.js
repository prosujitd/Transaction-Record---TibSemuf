import { Router } from "express";

import TransactionModel from "../models/transaction.js";

const router = Router();



router.get("/", async (req, res) => {
  const transaction = await TransactionModel.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});

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

export default router;

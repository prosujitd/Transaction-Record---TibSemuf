import TransactionModel from "../models/transaction.js";

export const index = async (req, res) => {
    const transaction = await TransactionModel.find({}).sort({ createdAt: -1 });
    res.json({ data: transaction });
  }

export const create = async (req, res) => {
    const { amount, description, date } = req.body;
    const transaction = new TransactionModel({
      amount,
      description,
      date,
    });
    await transaction.save();
    console.log(req.body);
    res.json({ message: req.body });
  }  

export const destroy = async (req, res) => {
    await TransactionModel.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Success" });
  }
  
export const update = async (req, res) => {
    await TransactionModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ message: "Success" });
  }  
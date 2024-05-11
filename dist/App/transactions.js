import express from 'express';
import { Transactions } from '../models/transactions.js';
export const transactionRouter = express.Router();
transactionRouter.get('/transactions', async (req, res) => {
    try {
        const { id, time, type, pay } = req.query;
        let transaction;
        if (id) {
            transaction = await Transactions.findById({ id });
        }
        else if (time) {
            transaction = await Transactions.findOne({ time: time });
        }
        else if (type) {
            transaction = await Transactions.findOne({ type: type });
        }
        else if (pay) {
            transaction = await Transactions.findOne({ pay: pay });
        }
        else {
            transaction = await Transactions.find();
        }
        if (!transaction)
            return res.status(404).send("Transaction not found");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.post('/transactions', async (req, res) => {
    try {
        const transaction = new Transactions(req.body);
        transaction.save().then((transaction) => {
            res.send(transaction);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
});

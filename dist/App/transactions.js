import express from 'express';
import { Transactions } from '../models/transactions.js';
export const transactionRouter = express.Router();
transactionRouter.get('/transactions', async (req, res) => {
    try {
        const { nif, cif } = req.query;
        let transaction;
        if (nif) {
            transaction = await Transactions.findOne({ humanId: nif });
        }
        else if (cif) {
            transaction = await Transactions.findOne({ humanId: cif });
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

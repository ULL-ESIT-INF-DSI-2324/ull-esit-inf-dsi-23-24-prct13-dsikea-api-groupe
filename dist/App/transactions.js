import express from 'express';
import { Transactions } from '../models/transactions.js';
import { Providers } from '../models/providers.js';
import { Customers } from '../models/customers.js';
import { Furnitures } from '../models/furnitures.js';
export const transactionRouter = express.Router();
transactionRouter.get('/transactions', async (req, res) => {
    try {
        const { id, time, type, pay } = req.query;
        let transaction;
        if (id) {
            transaction = await Transactions.findOne({ _id: id });
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
            return res.status(404).send("Does not exist any transaction.");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.get('/transactions/id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = await Transactions.findOne({ _id: id });
        if (!transaction)
            return res.status(404).send("Transaction not found");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.get('/transactions/time/:time', async (req, res) => {
    try {
        const time = req.params.time;
        const transaction = await Transactions.findOne({ time: time });
        if (!transaction)
            return res.status(404).send("Transaction not found");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.get('/transactions/pay/:pay', async (req, res) => {
    try {
        const pay = req.params.pay;
        const transaction = await Transactions.findOne({ pay: pay });
        if (!transaction)
            return res.status(404).send("Transaction not found");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.get('/transactions/type/:type', async (req, res) => {
    try {
        const type = req.params.type;
        const transaction = await Transactions.findOne({ type: type });
        if (!transaction)
            return res.status(404).send("Transaction not found");
        res.send(transaction);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
// CAMBIAR EL PROVIDER Y EL CUSTOMER PARA QUE ACEPTE EL NIF/CIF
transactionRouter.post('/transactions', async (req, res) => {
    try {
        const transaction = new Transactions(req.body);
        const isProvider = await Providers.findById(req.body.humanId);
        const isCustomer = await Customers.findById(req.body.humanId);
        const furnitures = req.body.furniture;
        if (!isCustomer && !isProvider)
            return res.status(404).send("You need to provide any human");
        if (furnitures.length <= 0)
            return res.status(404).send("You need to provide any furnitures");
        switch (req.body.type) {
            case "Buy":
                if (isProvider)
                    return res.status(404).send("You need to provide a consumer");
                for (let i = 0; i < furnitures.length; i++) {
                    const fn = await Furnitures.findById(furnitures[i]);
                    if (!fn) {
                        res.status(404).send("You need to provide a correct furnitures IDs");
                    }
                    else {
                        if (req.body.amount >= fn.stock) {
                            fn.stock -= req.body.amount;
                        }
                        else {
                            res.status(404).send("You do not have enough money");
                        }
                        await fn.save();
                    }
                }
                break;
            case "Sell":
                if (isCustomer)
                    return res.status(404).send("You need to provide a provider");
                for (let i = 0; i < furnitures.length; i++) {
                    const fn = await Furnitures.findById(furnitures[i]);
                    if (!fn) {
                        res.status(404).send("You need to provide a correct furnitures IDs");
                    }
                    else {
                        if (req.body.amount >= fn.stock) {
                            fn.stock += req.body.amount;
                        }
                        else {
                            res.status(404).send("You do not have enough money");
                        }
                        await fn.save();
                    }
                }
                break;
            default:
                return res.status(404).send("An error has ocurred");
                break;
        }
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
transactionRouter.delete('transactions/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = await Transactions.findByIdAndDelete({ id });
        if (!transaction)
            return res.status(404).send("Transactions not found");
        res.send("Transactions has been removed");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
transactionRouter.delete('transactions/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = await Transactions.findByIdAndDelete({ id });
        if (!transaction)
            return res.status(404).send("Transactions not found");
        res.send("Transactions has been removed");
    }
    catch (error) {
        res.status(400).send(error);
    }
});

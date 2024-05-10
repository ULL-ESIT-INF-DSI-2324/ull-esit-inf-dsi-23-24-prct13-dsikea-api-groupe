import express, {Request, Response} from 'express'
import { Transactions } from '../models/transactions.js'
import { Customers } from '../models/customers.js';
import { Providers } from '../models/providers.js';

export const transactionRouter = express.Router();

transactionRouter.get('/transactions', async (req :Request, res :Response) => {
  try {
    const {nif, cif} = req.query;
    let transaction;
    if (nif) {
      transaction = await Transactions.findOne({ humanId: nif })
    } else if (cif) {
      transaction = await Transactions.findOne({ humanId: cif })
    }
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.post('/transaction', async (req :Request, res :Response) => {
  try {
    const {humanId, type} = req.body;
    const human = await Customers.findById(humanId) || await Providers.findById(humanId);
    if (!human) return res.status(404).send("Human not found");
    if (type == "Sell") { // Proveedor vende

    } else if (type == "Buy") { // Customer compra
      
    }
  } catch (error) {
    res.status(400).send(error);
  }
})
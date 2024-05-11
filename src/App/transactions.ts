import express, {Request, Response} from 'express'
import { Transactions } from '../models/transactions.js'
import { Customers } from '../models/customers.js';
import { Providers } from '../models/providers.js';
import { Furnitures } from '../models/furnitures.js';

export const transactionRouter = express.Router();

transactionRouter.get('/transactions', async (req :Request, res :Response) => { // cambiar esto tiene que ser por _id, Time, Type, Pay
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

transactionRouter.post('/transactions', async (req :Request, res :Response) => {
  try {
    const transaction = new Transactions(req.body);
    transaction.save().then((transaction) => {
      res.send(transaction);
    }).catch((err) => {
      res.status(400).send(err);
    })
  } catch (error) {
    res.status(404).send(error);
  }
})
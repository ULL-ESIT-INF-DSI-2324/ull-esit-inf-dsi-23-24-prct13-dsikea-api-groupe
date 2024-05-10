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

transactionRouter.post('/transactions', async (req :Request, res :Response) => {
  try {
    const { type } = req.body;
    const human = await Customers.findById(req.body.customer) || await Providers.findOne(req.body.provider);
    if (!human) return res.status(404).send("Human not found");
    const customer = await Customers.findById(humanId);
    const provider = await Providers.findById(humanId);
    const furnitures = await req.body.furniture;
    if (furnitures.length <= 0) return res.status(404).send("Furnitures has been not provide");
    if (type == "Sell") { // Proveedor vende
      if (customer) return res.status(404).send("You need to introduce a provider, not a customer")
      const transaction = new Transactions(req.body);
      transaction.save().then((tsn) => {
        res.send(tsn);
      }).catch((err) => {
        res.status(400).send(err);
      })
    } else if (type == "Buy") { // Customer compra
      if (provider) return res.status(404).send("You need to introduce a customer, not a provider")
        const transaction = new Transactions(req.body);
      transaction.save().then((tsn) => {
        res.send(tsn);
      }).catch((err) => {
        res.status(400).send(err);
      })
    }
  } catch (error) {
    res.status(400).send(error);
  }
})
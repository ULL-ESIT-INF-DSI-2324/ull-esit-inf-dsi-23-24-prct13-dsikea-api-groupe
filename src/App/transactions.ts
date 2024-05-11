import express, {Request, Response} from 'express'
import { Transactions } from '../models/transactions.js'
import { Providers } from '../models/providers.js';
import { Customers } from '../models/customers.js';
import { Furnitures } from '../models/furnitures.js';

export const transactionRouter = express.Router();

transactionRouter.get('/transactions', async (req :Request, res :Response) => { // cambiar esto tiene que ser por _id, Time, Type, Pay
  try {
    const {id, time, type, pay} = req.query;
    let transaction;
    if (id) {
      transaction = await Transactions.findOne({ _id: id })
    } else if (time) {
      transaction = await Transactions.findOne({ time: time })
    } else if (type) {
      transaction = await Transactions.findOne({ type: type })
    } else if (pay) {
      transaction = await Transactions.findOne({ pay: pay })
    } else {
      transaction = await Transactions.find()
    }
    if (!transaction) return res.status(404).send("Does not exist any transaction.");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.get('/transactions/:id', async (req :Request, res :Response) => {
  try {
    const id = req.params.id;
    const transaction = await Transactions.findOne({ _id: id });
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.get('/transactions/:time', async (req :Request, res :Response) => {
  try {
    const time = req.params.time;
    const transaction = await Transactions.findOne({ time: time });
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.get('/transactions/:pay', async (req :Request, res :Response) => {
  try {
    const pay = req.params.pay;
    const transaction = await Transactions.findOne({ pay: pay });
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.get('/transactions/:type', async (req :Request, res :Response) => {
  try {
    const type = req.params.type;
    const transaction = await Transactions.findOne({ type: type });
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
})

transactionRouter.post('/transactions', async (req :Request, res :Response) => {
  try {
    const transaction = new Transactions(req.body);
    const human = req.body.provider || req.body.customer;
    const furnitures = req.body.furniture;
    if (furnitures.length <= 0) return res.status(404).send("You need to provide any furnitures")
    console.log(human);
    console.log(req.body.type);
    console.log(req.body.furniture[0]);
      
    // // switch (req.body.type as string) {
    // //   case "Buy":
    // //     if (isProvider) return res.status(404).send("You need to provide a consumer")
    // //     human = await Customers.findOne({ _id: isCustomer });
    // //     if (!human) return res.status(404).send("You need to provide a correct ID for the customer")
    // //     break;
    // //   case "Sell":
    // //     if (isCustomer) return res.status(404).send("You need to provide a provider")
    // //     human = await Providers.findOne({ _id: isProvider });
    // //     if (!human) return res.status(404).send("You need to provide a correct ID for the provider")
    // //     break;
    // //   default:
    // //     return res.status(404).send("An error has ocurred");
    // //     break;
    // // }
    // // for (let i = 0; i < furnitures.length; i++) {
    // //   const fns = furnitures[i];
    // //   const fn = await Furnitures.findOne(fns);
    // //   if (!fn) return res.status(404).send("You need to provide a correct furnitures IDs");
    // // }
    transaction.save().then((transaction) => {
      res.send(transaction);
    }).catch((err) => {
      res.status(400).send(err);
    })
  } catch (error) {
    res.status(404).send(error);
  }
})

transactionRouter.delete('transactions/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transactions.findByIdAndDelete({ id })
    if (!transaction) return res.status(404).send("Transactions not found");
    res.send("Transactions has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})
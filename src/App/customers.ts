import express, {Request, Response} from 'express'
import { Customers } from '../models/customers.js';

export const customerRouter = express.Router();

customerRouter.get('/customers', async (req :Request, res :Response) => {
  try {
    const {id, nif} = req.query;
    let customer;
    if (id) {
      customer = await Customers.findOne({ _id: id });
    } else if (nif) {
      customer = await Customers.findOne({ nif: nif });      
    } else {
      customer = await Customers.find();
    }
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send(customer);
  } catch (error) {
    res.status(404).send(error);
  }
});

customerRouter.get('/customers/id/:id', async (req :Request, res :Response) => {
  try {
    const id = req.params.id;
    const customer = await Customers.findById({ _id: id });
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send(customer);
  } catch (error) {
    res.status(404).send(error);
  }
});

customerRouter.get('/customers/nif/:nif', async (req :Request, res :Response) => {
  try {
    const nif = req.params.nif;
    const customer = await Customers.findOne({ nif: nif });
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send(customer);
  } catch (error) {
    res.status(404).send(error);
  }
});

customerRouter.post('/customers', async (req, res) => {
  const customer = new Customers(req.body);
  customer.save().then((provider) => {
    res.send(provider);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

customerRouter.patch('/customers', async (req, res) => {
  try {
    const nif = req.query;
    const updates = req.body;
    const customer = await Customers.findOneAndUpdate(nif, updates, {new :true })
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send("Client has been updated");
  } catch (error) {
    res.status(404).send(error);
  }
})

customerRouter.patch('/customers/id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const customer = await Customers.findByIdAndUpdate(id, updates, {new :true })
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send("Client has been updated");
  } catch (error) {
    res.status(404).send(error);
  }
})

customerRouter.get('/customers', async (req :Request, res :Response) => {
  try {
    const {id, nif} = req.query;
    let customer;
    if (id) {
      customer = await Customers.findOneAndDelete({ id });
    } else if (nif) {
      customer = await Customers.findOneAndDelete({ nif });      
    } else {
      return res.status(404).send("Client not found");
    }
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send(customer);
  } catch (error) {
    res.status(404).send(error);
  }
});

customerRouter.delete('/customers/id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customers.findOneAndDelete({ _id: id })
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send("Client has been removed");
  } catch (error) {
    res.status(404).send(error);
  }
})

customerRouter.delete('/customers/nif/:nif', async (req, res) => {
  try {
    const nif = req.params.nif;    
    const customer = await Customers.findOneAndDelete({ nif: nif })
    if (!customer) {
      return res.status(404).send("Client not found");
    }
    res.send("Client has been removed");
  } catch (error) {
    res.status(404).send(error);
  }
})
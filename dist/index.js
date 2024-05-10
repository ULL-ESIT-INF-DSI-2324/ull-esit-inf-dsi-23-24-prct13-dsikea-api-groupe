import express from 'express';
import './db/mongoose.js';
// import { Furniture } from './models/furniture.js'
import { Customers } from './models/customers.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/customers', async (req, res) => {
    try {
        const { id, nif } = req.query;
        let customer;
        if (id) {
            customer = await Customers.findOne({ id: id });
        }
        else if (nif) {
            customer = await Customers.findOne({ nif: nif });
        }
        else {
            customer = await Customers.find();
        }
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send(customer);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.get('/customers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await Customers.findById({ id });
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send(customer);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.post('/customers', async (req, res) => {
    const customer = new Customers(req.body);
    customer.save().then((cst) => {
        res.send(cst);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
app.patch('/customers', async (req, res) => {
    try {
        const nif = req.query;
        const updates = req.body;
        const customer = await Customers.findOneAndUpdate(nif, updates, { new: true });
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send("Client has been updated");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.patch('/customers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const customer = await Customers.findByIdAndUpdate(id, updates, { new: true });
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send("Client has been updated");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.delete('/customers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await Customers.findByIdAndDelete({ id });
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send("Client has been removed");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.delete('/customers/:nif', async (req, res) => {
    try {
        const nif = req.params.nif;
        const customer = await Customers.findOneAndDelete({ nif });
        if (!customer) {
            return res.status(404).send("Client not found");
        }
        res.send("Client has been removed");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

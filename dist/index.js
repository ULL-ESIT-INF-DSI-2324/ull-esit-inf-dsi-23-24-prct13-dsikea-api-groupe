import express from 'express';
import './db/mongoose.js';
// import { Furniture } from './models/furniture.js'
import { Customers } from './models/customers/customers.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/customers', (req, res) => {
    res.send('Get Customers');
});
app.post('/customers', (req, res) => {
    const customer = new Customers(req.body);
    console.log(customer);
    customer.save().then((cst) => {
        res.send(cst);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

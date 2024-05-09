import express, {Request, Response} from 'express'
import './db/mongoose.js'
// import { Furniture } from './models/furniture.js'
import { Customers } from './models/customers.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/customers', async (req :Request, res :Response) => {
  const {id, dni} = req.query;
  try {
    let customer;
    if (id) {
      customer = await Customers.findOne({ id: id });
    } else if (dni) {
      customer = await Customers.findOne({ dni: dni });      
    } else {
      customer = await Customers.find();
    }
    res.send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/customers', (req, res) => {
  const customer = new Customers(req.body);
  customer.save().then((cst) => {
    res.send(cst);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);  
})

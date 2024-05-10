import express from 'express'
import './db/mongoose.js'
import { customerRouter } from './App/customers.js';
import { providerRouter } from './App/providers.js';
import { furnitureRouter } from './App/furnitures.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(customerRouter);
app.use(providerRouter);
app.use(furnitureRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})

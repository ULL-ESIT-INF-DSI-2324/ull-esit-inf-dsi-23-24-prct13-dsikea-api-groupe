import express from 'express'
import './db/mongoose.js'
import { Furniture } from './models/furniture.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/customers', (req, res) => {
  res.send('Render and Mongoose')
})

app.post('/customers', (req, res) => {
  const furniture = new Furniture(req.body);
  res.send(JSON.stringify(furniture))
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);  
})
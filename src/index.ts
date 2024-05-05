import express from 'express'
import './db/mongoose.js'
import { Furniture } from './models/furniture.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/furnitures', (req, res) => {
  const furniture = new Furniture(req.body);
  furniture.save().then((furn) => {
    res.send(furn)
  }).catch((err) => {
    res.send(err);
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);  
})
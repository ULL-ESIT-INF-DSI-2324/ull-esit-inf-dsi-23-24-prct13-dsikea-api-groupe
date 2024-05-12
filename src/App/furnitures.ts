import express, {Request, Response} from 'express'
import { Furnitures } from '../models/furnitures.js';

export const furnitureRouter = express.Router();

furnitureRouter.get('/furnitures', async (req :Request, res :Response) => {
  try {
    const {id, serialNumber, stock} = req.query;
    let provider;
    if (id) {
      provider = await Furnitures.findOne({ _id: id });
    } else if (serialNumber) {
      provider = await Furnitures.findOne({ serialNumber: serialNumber });      
    } else if (stock) {
      provider = await Furnitures.findOne({ stock: stock });     
    } else {
      provider = await Furnitures.find();
    }
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

furnitureRouter.get('/furnitures/id/:id', async (req :Request, res :Response) => {
  try {
    const id = req.params.id;
    const provider = await Furnitures.findOne({ _id: id });
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

furnitureRouter.get('/furnitures/price/:price', async (req :Request, res :Response) => {
  try {
    const price = req.params.price;
    const provider = await Furnitures.findOne({ price: price });
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

furnitureRouter.get('/furnitures/stock/:stock', async (req :Request, res :Response) => {
  try {
    const stock = req.params.stock;
    const provider = await Furnitures.findOne({ stock: stock });
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

furnitureRouter.get('/furnitures/serialNumber/:serialNumber', async (req :Request, res :Response) => {
  try {
    const serialNumber = req.params.serialNumber;
    const provider = await Furnitures.findOne({ serialNumber: serialNumber });
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

furnitureRouter.post('/furnitures', async (req, res) => {
  const provider = new Furnitures(req.body);
  provider.save().then((provider) => {
    res.send(provider);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

furnitureRouter.patch('/furnitures', async (req, res) => {
  try {
    const serialNumber = req.query;
    const updates = req.body;
    const provider = await Furnitures.findOneAndUpdate(serialNumber, updates, {new :true })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been updated");
  } catch (error) {
    res.status(400).send(error);
  }
})

furnitureRouter.patch('/furnitures/id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const provider = await Furnitures.findByIdAndUpdate(id, updates, {new :true })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been updated");
  } catch (error) {
    res.status(400).send(error);
  }
})

furnitureRouter.delete('/furnitures/stock/:stock', async (req, res) => {
  try {
    const stock = req.params.stock;
    const provider = await Furnitures.findOneAndDelete({ stock: stock })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})

furnitureRouter.delete('/furnitures/id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const provider = await Furnitures.findOne({ _id: id })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})

furnitureRouter.delete('/furnitures/serialNumber/:serialNumber', async (req, res) => {
  try {
    const serialNumber = req.params.serialNumber;
    const provider = await Furnitures.findOne({ serialNumber: serialNumber })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})
import express, {Request, Response} from 'express'
import { Furnitures } from '../models/furnitures.js';

export const providerRouter = express.Router();

providerRouter.get('/furnitures', async (req :Request, res :Response) => {
  try {
    const {id, serialNumber} = req.query;
    let provider;
    if (id) {
      provider = await Furnitures.findOne({ _id: id });
    } else if (serialNumber) {
      provider = await Furnitures.findOne({ serialNumber: serialNumber });      
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

providerRouter.get('Furnitures/:id', async (req :Request, res :Response) => {
  try {
    const id = req.params.id;
    const provider = await Furnitures.findById({ id });
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

providerRouter.post('/furnitures', async (req, res) => {
  const provider = new Furnitures(req.body);
  provider.save().then((provider) => {
    res.send(provider);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

providerRouter.patch('/furnitures', async (req, res) => {
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

providerRouter.patch('Furnitures/:id', async (req, res) => {
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

providerRouter.get('/furnitures', async (req :Request, res :Response) => {
  try {
    const {id, serialNumber} = req.query;
    let provider;
    if (id) {
      provider = await Furnitures.findOneAndDelete({ id });
    } else if (serialNumber) {
      provider = await Furnitures.findOneAndDelete({ serialNumber });      
    } else {
      return res.status(404).send("Furniture not found");
    }
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

providerRouter.delete('Furnitures/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const provider = await Furnitures.findByIdAndDelete({ id })
    if (!provider) {
      return res.status(404).send("Furniture not found");
    }
    res.send("Furniture has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})
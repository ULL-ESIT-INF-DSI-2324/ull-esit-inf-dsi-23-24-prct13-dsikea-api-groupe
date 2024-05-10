import express, {Request, Response} from 'express'
import { Providers } from '../models/providers.js';

export const providerRouter = express.Router();

providerRouter.get('/providers', async (req :Request, res :Response) => {
  try {
    const {id, nif} = req.query;
    let provider;
    if (id) {
      provider = await Providers.findOne({ _id: id });
    } else if (nif) {
      provider = await Providers.findOne({ nif: nif });      
    } else {
      provider = await Providers.find();
    }
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

providerRouter.get('providers/:id', async (req :Request, res :Response) => {
  try {
    const id = req.params.id;
    const provider = await Providers.findById({ id });
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

providerRouter.post('/providers', async (req, res) => {
  const provider = new Providers(req.body);
  provider.save().then((provider) => {
    res.send(provider);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

providerRouter.patch('/providers', async (req, res) => {
  try {
    const nif = req.query;
    const updates = req.body;
    const provider = await Providers.findOneAndUpdate(nif, updates, {new :true })
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send("Provider has been updated");
  } catch (error) {
    res.status(400).send(error);
  }
})

providerRouter.patch('providers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const provider = await Providers.findByIdAndUpdate(id, updates, {new :true })
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send("Provider has been updated");
  } catch (error) {
    res.status(400).send(error);
  }
})

providerRouter.get('/providers', async (req :Request, res :Response) => {
  try {
    const {id, nif} = req.query;
    let provider;
    if (id) {
      provider = await Providers.findOneAndDelete({ id });
    } else if (nif) {
      provider = await Providers.findOneAndDelete({ nif });      
    } else {
      return res.status(404).send("Provider not found");
    }
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

providerRouter.delete('providers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const provider = await Providers.findByIdAndDelete({ id })
    if (!provider) {
      return res.status(404).send("Provider not found");
    }
    res.send("Provider has been removed");
  } catch (error) {
    res.status(400).send(error);
  }
})
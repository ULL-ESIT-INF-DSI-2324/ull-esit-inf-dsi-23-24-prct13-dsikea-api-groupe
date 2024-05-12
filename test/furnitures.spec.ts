import request from 'supertest';
import { Furnitures } from '../src/models/furnitures.js';
import { app } from '../src/index.js';

const furniture_0 = {
  id: "0",
  name: "Mesa",
  description: "Mesa de carpintero",
  size: "2x2",
  price: 100,
  stock: 0,
  serialNumber: "0MC100"
}

const furniture_1 = {
  id: "1",
  name: "Mesa",
  description: "Mesa de colegio",
  size: "1x2",
  price: 50,
  stock: 0,
  serialNumber: "1MC50"
}

const furniture_2 = { // Invalid stock
  id: "2",
  name: "Mesa",
  description: "Mesa de carpintero",
  size: "2x2",
  price: 100,
  stock: -1,
  serialNumber: "2MC100"
}

const furniture_mod = {
  id: "3",
  name: "Mesa",
  description: "Mesa de carpintero modificada",
  size: "2x2",
  price: 100,
  stock: 0,
  serialNumber: "3MCM100"
}

beforeEach(async () => {
  await Furnitures.deleteMany();
});

describe("----FURNITURES----", () => {
  context("POST /furnitures", () => {
    it("Should add new furniture", async () => {
      await request(app).post(`/furnitures`).send(furniture_0).expect(200);
    });
    it("Should add new furniture with description", async () => {
      await request(app).post(`/furnitures`).send(furniture_1).expect(200);
    });
    it("Should not add new furniture with invalid stock", async () => {
      await request(app).post(`/furnitures`).send(furniture_2).expect(400);
    });
    it("Should not add new furniture with duplicated id", async () => {
      await new Furnitures(furniture_0).save();
      await request(app).post(`/furnitures`).send(furniture_0).expect(400);
    });
  })

  context("GET /furnitures", () => {
    it("Should get a furniture by stock with query", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).get(`/furnitures?stock=${furniture.stock}`).expect(200);
    });
    it("Should get a furniture by id with query", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).get(`/furnitures?id=${furniture._id}`).expect(200);
    });
    it("Should get a furniture by dynamic stock", async () => {
      await new Furnitures(furniture_0).save();
      await request(app).get(`/furnitures/stock/${furniture_0.stock}`).expect(200);
    });
    it("Should get a furniture by dynamic id", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).get(`/furnitures/id/${furniture._id}`).expect(200);
    });

    it("Should not get a furniture by stock with query", async () => {
      const invalid = "-1"
      await request(app).get(`/furnitures?stock=${invalid}`).expect(404);
    });
    it("Should not get a furniture by id with query", async () => {
      const invalid = "-1"
      await request(app).get(`/furnitures?id=${invalid}`).expect(400);
    });
    it("Should not get a furniture by dynamic stock", async () => {
      const invalid = "-1"
      await request(app).get(`/furnitures/stock/${invalid}`).expect(404);
    });
  })

  context("PATCH /furnitures", () => {
    it("Should update a furniture by stock with query", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).patch(`/furnitures?stock=${furniture.stock}`).send(furniture_mod).expect(200);
    });
    it("Should update a furniture by dynamic id", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).patch(`/furnitures/id/${furniture._id}`).send(furniture_mod).expect(200);
    });

    it("Should not update a furniture by stock with query", async () => {
      const invalid = "-1";
      await request(app).patch(`/furnitures?stock=${invalid}`).send(furniture_mod).expect(404);
    });
  })

  context("DELETE /furnitures", () => {
    it("Should delete a furniture by dynamic stock", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).delete(`/furnitures/stock/${furniture.stock}`).expect(200);
    });
    it("Should delete a furniture by dynamic serialNumber", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).delete(`/furnitures/serialNumber/${furniture.serialNumber}`).expect(200);
    });
    it("Should delete a furniture by dynamic id", async () => {
      const furniture = await new Furnitures(furniture_0).save();
      await request(app).delete(`/furnitures/id/${furniture._id}`).expect(200);
    });

    it("Should not delete a furniture by stock with query", async () => {
      const invalid = "-1";
      await request(app).delete(`/furnitures?stock=${invalid}`).expect(404);
    });
    it("Should not delete a furniture by serialNumber with query", async () => {
      const invalid = "-1";
      await request(app).delete(`/furnitures?serialNumber=${invalid}`).expect(404);
    });
  })
})
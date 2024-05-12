import request from 'supertest';
import { Providers } from '../src/models/providers.js';
import { app } from '../src/index.js';

const provider_0 = {
  id: "0",
  cif: "00000000A",
  name: "Alejandro",
  surname: "Rodriguez",
  number: "000000000"
}

const provider_1 = {
  id: "1",
  cif: "00000000F",
  name: "Federico",
  surname: "Garcia",
  direction: "Direccion 1",
  number: "000000001"
}

const provider_2 = { // Invalid cif
  id: "0",
  cif: "",
  name: "Miguel",
  surname: "Angel",
  number: "000000000"
}

const provider_3 = { // Invalid number
  id: "0",
  cif: "00000000M",
  name: "Miguel",
  surname: "Angel",
  number: ""
}

const provider_mod = {
  id: "1",
  cif: "00000000F",
  name: "Federico",
  surname: "Garcia",
  direction: "Direccion 2",
  number: "000000005"
}

beforeEach(async () => {
  await Providers.deleteMany();
});

describe("----PROVIDERS----", () => {
  context("POST /providers", () => {
    it("Should add new provider", async () => {
      await request(app).post(`/providers`).send(provider_0).expect(200);
    });
    it("Should add new provider with description", async () => {
      await request(app).post(`/providers`).send(provider_1).expect(200);
    });
    it("Should not add new provider with invalid cif", async () => {
      await request(app).post(`/providers`).send(provider_2).expect(400);
    });
    it("Should not add new provider with invalid number", async () => {
      await request(app).post(`/providers`).send(provider_2).expect(400);
    });
    it("Should not add new provider with duplicated id", async () => {
      await new Providers(provider_0).save();
      await request(app).post(`/providers`).send(provider_0).expect(400);
    });
  })

  context("GET /providers", () => {
    it("Should get a provider by cif with query", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).get(`/providers?cif=${provider.cif}`).expect(200);
    });
    it("Should get a provider by id with query", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).get(`/providers?id=${provider._id}`).expect(200);
    });
    it("Should get a provider by dynamic cif", async () => {
      await new Providers(provider_0).save();
      await request(app).get(`/providers/cif/${provider_0.cif}`).expect(200);
    });
    it("Should get a provider by dynamic id", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).get(`/providers/id/${provider._id}`).expect(200);
    });

    it("Should not get a provider by cif with query", async () => {
      const invalid = "-1"
      await request(app).get(`/providers?cif=${invalid}`).expect(404);
    });
    it("Should not get a provider by id with query", async () => {
      const invalid = "-1"
      await request(app).get(`/providers?id=${invalid}`).expect(400);
    });
    it("Should not get a provider by dynamic cif", async () => {
      const invalid = "-1"
      await request(app).get(`/providers/cif/${invalid}`).expect(404);
    });
  })

  context("PATCH /providers", () => {
    it("Should update a provider by cif with query", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).patch(`/providers?cif=${provider.cif}`).send(provider_mod).expect(200);
    });
    it("Should update a provider by dynamic id", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).patch(`/providers/id/${provider._id}`).send(provider_mod).expect(200);
    });

    it("Should not update a provider by cif with query", async () => {
      const invalid = "-1";
      await request(app).patch(`/providers?cif=${invalid}`).send(provider_mod).expect(404);
    });
    it("Should not update a provider by dynamic id", async () => {
      const invalid = "-1";
      await request(app).patch(`/providers/id/${invalid}`).send(provider_mod).expect(404);
    });
  })

  context("DELETE /providers", () => {
    it("Should delete a provider by cif with query", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).delete(`/providers/cif/${provider.cif}`).expect(200);
    });
    it("Should delete a provider by dynamic id", async () => {
      const provider = await new Providers(provider_0).save();
      await request(app).delete(`/providers/id/${provider._id}`).expect(200);
    });

    it("Should not delete a provider by cif with query", async () => {
      const invalid = "-1";
      await request(app).delete(`/providers?cif=${invalid}`).expect(404);
    });
    it("Should not delete a provider by dynamic id", async () => {
      const invalid = "-1";
      await request(app).delete(`/providers/id/${invalid}`).expect(404);
    });
  })
})
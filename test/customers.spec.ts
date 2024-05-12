import request from 'supertest';
import { Customers } from '../src/models/customers.js';
import { app } from '../src/index.js';

const customer_0 = {
  id: "0",
  nif: "00000000A",
  name: "Alejandro",
  surname: "Rodriguez",
  number: "000000000"
}

const customer_1 = {
  id: "1",
  nif: "00000000F",
  name: "Federico",
  surname: "Garcia",
  direction: "Direccion 1",
  number: "000000001"
}

const customer_2 = { // Invalid nif
  id: "0",
  nif: "",
  name: "Miguel",
  surname: "Angel",
  number: "000000000"
}

const customer_3 = { // Invalid number
  id: "0",
  nif: "00000000M",
  name: "Miguel",
  surname: "Angel",
  number: ""
}

const customer_mod = {
  id: "1",
  nif: "00000000F",
  name: "Federico",
  surname: "Garcia",
  direction: "Direccion 2",
  number: "000000005"
}

beforeEach(async () => {
  await Customers.deleteMany();
});

describe("----CUSTOMERS----", () => {
  context("POST /customers", () => {
    it("Should add new customer", async () => {
      await request(app).post(`/customers`).send(customer_0).expect(200);
    });
    it("Should add new customer with description", async () => {
      await request(app).post(`/customers`).send(customer_1).expect(200);
    });
    it("Should not add new customer with invalid nif", async () => {
      await request(app).post(`/customers`).send(customer_2).expect(400);
    });
    it("Should not add new customer with invalid number", async () => {
      await request(app).post(`/customers`).send(customer_2).expect(400);
    });
    it("Should not add new customer with duplicated id", async () => {
      await new Customers(customer_0).save();
      await request(app).post(`/customers`).send(customer_0).expect(400);
    });
  })

  context("GET /customers", () => {
    it("Should get a customer by nif with query", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).get(`/customers?nif=${customer.nif}`).expect(200);
    });
    it("Should get a customer by id with query", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).get(`/customers?id=${customer._id}`).expect(200);
    });
    it("Should get a customer by dynamic nif", async () => {
      await new Customers(customer_0).save();
      await request(app).get(`/customers/nif/${customer_0.nif}`).expect(200);
    });
    it("Should get a customer by dynamic id", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).get(`/customers/id/${customer._id}`).expect(200);
    });

    it("Should not get a customer by nif with query", async () => {
      const invalid = "-1"
      await request(app).get(`/customers?nif=${invalid}`).expect(404);
    });
    it("Should not get a customer by id with query", async () => {
      const invalid = "-1"
      await request(app).get(`/customers?id=${invalid}`).expect(404);
    });
    it("Should not get a customer by dynamic nif", async () => {
      const invalid = "-1"
      await request(app).get(`/customers/nif/${invalid}`).expect(404);
    });
    it("Should not get a customer by dynamic id", async () => {
      const invalid = "-1"
      await request(app).get(`/customers/id/${invalid}`).expect(404);
    });
  })

  context("PATCH /customers", () => {
    it("Should update a customer by nif with query", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).patch(`/customers?nif=${customer.nif}`).send(customer_mod).expect(200);
    });
    it("Should update a customer by dynamic id", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).patch(`/customers/id/${customer._id}`).send(customer_mod).expect(200);
    });

    it("Should not update a customer by nif with query", async () => {
      const invalid = "-1";
      await request(app).patch(`/customers?nif=${invalid}`).send(customer_mod).expect(404);
    });
    it("Should not update a customer by dynamic id", async () => {
      const invalid = "-1";
      await request(app).patch(`/customers/id/${invalid}`).send(customer_mod).expect(404);
    });
  })

  context("DELETE /customers", () => {
    it("Should delete a customer by nif with query", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).delete(`/customers/nif/${customer.nif}`).expect(200);
    });
    it("Should delete a customer by dynamic id", async () => {
      const customer = await new Customers(customer_0).save();
      await request(app).delete(`/customers/id/${customer._id}`).expect(200);
    });

    it("Should not delete a customer by nif with query", async () => {
      const invalid = "-1";
      await request(app).delete(`/customers?nif=${invalid}`).expect(404);
    });
    it("Should not delete a customer by dynamic id", async () => {
      const invalid = "-1";
      await request(app).delete(`/customers/id/${invalid}`).expect(404);
    });
  })
})
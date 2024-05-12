import request from 'supertest';
import { Transactions } from '../src/models/transactions.js';
import { Customers } from '../src/models/customers.js';
import { Furnitures } from '../src/models/furnitures.js';
import { app } from '../src/index.js';

const customer_0 = {
  id: "10",
  nif: "00000001A",
  name: "Alejandro",
  surname: "Rodriguez",
  number: "000000000"
}

const furniture_0 = {
  id: "10",
  name: "Mesa",
  description: "Mesa de carpintero",
  size: "2x2",
  price: 100,
  stock: 0,
  serialNumber: "10MC100"
}

const buyer_0 = {
  id: "0",
  humanId: "6640c53ccc547e7f980d7c6b",
  type: "Buy",
  furniture: [
    "6640c53ccc547e7f980d7c6d"
  ],
  customer: "00000000A",
  pay: 100,
  amount: 5
}

const seller_0 = {
  id: "0",
  humanId: "663f9cdd975885219660b26e",
  type: "Sell",
  furniture: [
    "6640164b073dd84e640918e4"
  ],
  provider: "00000000B",
  pay: 100,
  amount: 5
}

beforeEach(async () => {
  await Transactions.deleteMany();
  await Furnitures.deleteMany();
  await Customers.deleteMany();
});

describe("----TRANSACTIONS----", () => {
  context("GET /transactions", () => {
    it("Should get transactions", async () => {
      await new Transactions(seller_0).save();
      await request(app).get(`/transactions`).expect(200);
    });
    it("Should get transactions by id", async () => {
      const transaction = await new Transactions(seller_0).save();
      await request(app).get(`/transactions/id/${transaction._id}`).expect(200);
    });
    it("Should get transactions by type", async () => {
      const transaction = await new Transactions(seller_0).save();
      await request(app).get(`/transactions/type/${transaction.type}`).expect(200);
    });
    it("Should get transactions by pay", async () => {
      const transaction = await new Transactions(seller_0).save();
      await request(app).get(`/transactions/pay/${transaction.pay}`).expect(200);
    });

    it("Should not get transactions by id", async () => {
      await request(app).get(`/transactions/id/-1`).expect(400);
    });
    it("Should not get transactions by type", async () => {
      await request(app).get(`/transactions/type/-1`).expect(404);
    });
    it("Should not get transactions by pay", async () => {
      await request(app).get(`/transactions/pay/-1`).expect(404);
    });
  })
})
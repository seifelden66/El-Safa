const jwt = require("jsonwebtoken");
const request = require("supertest");
const app = require("../app");

const token = jwt.sign(
  {
    userId: "123",
    role: "admin",
  },
  "kareem"
);

const { mongoConnect, mongoDisconnect } = require("../util/mongo.db");
describe("Admin API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test Get /users", () => {
    test("it should respose with 302 redirect failur", async () => {
      const response = await request(app)
        .get("/v1/admin/all-users")
        .expect(302);
    });
    test("it should response wiht 200 ok success", async () => {
      const response = await request(app)
        .get("/v1/admin/all-users")
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
});

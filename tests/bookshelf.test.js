// const request = require("supertest");
// const jwt = require("jsonwebtoken");
// const { createApp } = require("../app");
// const appDataSource = require("../src/models/dataSource");

// const users = [
//   {
//     id: 1,
//     kakao_id: 12345678,
//     nickName: "lolo",
//     email: "test1@test.com",
//     point: 1000000.0,
//   },
//   {
//     id: 2,
//     kakao_id: 2345678,
//     nickName: "lullu",
//     email: "test2@test.com",
//     point: 1000000.0,
//   },
// ];

// const books = [
//   {
//     id: 1,
//     name: "hahahaha",
//   },
//   {
//     id: 2,
//     name: "ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓ",
//   },
// ];

// describe("Get My Bookshelf", () => {
//   let app;

//   beforeAll(async () => {
//     app = createApp();
//     await appDataSource.initialize();
//   });

//   afterAll(async () => {
//     await appDataSource.destroy();
//   });

//   test("SUCCESS: Welcome to YOUR BOOKSHELF!", async () => {
//     const TOKEN = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
//       algorithm: process.env.ALGORITHM,
//       expiresIn: process.env.JWT_EXPIRES_IN,
//     });

//     await request(app).get("/bookshelf").set({ Authorization: TOKEN }).expect(200);
//   });
// });

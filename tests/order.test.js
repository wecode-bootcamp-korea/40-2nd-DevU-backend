//로그인한 사용자가 한 책의 상세페이지에서 책을 구매하는 페이지로 넘어간다
//구매하기 버튼을 눌렀을 때
// ==> 로그인되어있는지 확인
// ==>

const request = require("supertest");
const { createApp } = require("../app");
const appDataSource = require("../src/models/dataSource");

describe("Check Order", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
  });

  AfterAll(async () => {
    await appDataSource.query(`SET foreign_key_checks=0;`);
    await appDataSource.query(`TRUNCATE users`);
    await appDataSource.query(`SET foreign_key_checks=1;`);

    await appDataSource.destroy();
  });

  test("FAILED : 로그인이 필요합니다", async () => {
    await request(app)
      .get("/orders")
      .expect(400)
      .expect({ message: "Login Required" });
  });

  test("SUCCESS : Order List", async () => {
    await request(app)
      .get("/orders")
      .expect(200)
      .expect({message: "Order List"})
  });
});

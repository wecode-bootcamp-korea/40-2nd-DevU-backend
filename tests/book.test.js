const request = require("supertest");
const axios = require('axios')
const { createApp } = require('../app')
const appDataSource = require('../src/models/dataSource')

jest.mock('axios')

describe("signin", ()=> {
  let app;

  beforeAll(async ()=> {
      app = createApp();
      await appDataSource.initialize();
    });

  afterAll(async () => {
      await appDataSource.query(`SET foreign_key_checks=0;`)
      await appDataSource.query(`TRUNCATE users`)
      await appDataSource.query(`SET foreign_key_checks=1;`)

      await appDataSource.destroy();
  })

  test("GET /books/ 모든 책 리스트 성공 시 return 200.", async () =>{ 
    const response = await request(app).get('/books/')
    expect(response.status).toBe(200)
})

})
router.get("/", bookController.getAllBooks);
router.get("/:mainCategoryId", bookController.getBooksByMainCategoryId);

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
  });

  test("SUCCESS : kakao signin", async ()=>{
      axios.get = jest.fn().mockReturnValue({
          data: {
              id: 123456789,
              connected_at: '2023-01-03T09:15:00Z',
              properties :{
                  nickname: '황황',
                  profile_image: "http://k.kakaocdn.net/dn",
                  thumbnail_image: 'http://k.kakaocdn/netetc',
              },
              kakao_account: {
                  profile_nickname_needs_agreement: false,
                  profile: {
                    nickname: "황황",
                    profile_image_url: "http://k.kakaocdn.net/dn",
                  },
                  has_email : true,
                  email_needs_agreement : false,
                  is_email_vaild : true,
                  is_email_verfied : true,
                  email: "HwangHwang@testing.com",
              },
          },
      }); 
      await request(app)
      .post("/users/kakao/signin")
      .set({Authorization: 'Bearer kakaoToken',})
      .expect(200)
  });

   test("FAILED: NEED ACCESSTOKEN", async () =>{ 
      await request(app)
      .post("/users/kakao/signin")
      .expect(400)
      .expect({message:"kakaoTokenError"})
  })
})
// file: file_controller_test.js
// process.env.PORT = 5002

import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import request from 'supertest'
import app from '../main'

const server = app

chai.use(chaiHttp)

describe('File API', () => {
  describe('/GET files/data', () => {
    it('it should get all data from files', (done) => {
      request(server.getInstance())
        .get('/files/data')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(err).to.be.equal(null)
          expect(res.status).equal(200)
          expect(res.body).to.be.a('array')

          done()
        })
    })

    it('it should get data from a single file using query param', (done) => {
      request(server.getInstance())
        .get('/files/data?fileName=test2.csv')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(err).to.be.equal(null)
          expect(res.status).equal(200)
          expect(res.body.length).to.be.equal(1)

          done()
        })
    })

    it('it should contain file properties', (done) => {
      request(server.getInstance())
        .get('/files/data?fileName=test2.csv')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(err).to.be.equal(null)
          expect(res.body[0]).to.have.property('file')
          expect(res.body[0]).to.have.property('lines')

          done()
        })
    })
  })
})

// describe('FileController', () => {
//   let controller;

//   beforeEach(() => {
//     controller = new FileController();
//   });

//   it('should get files', async () => {
//     const fileName = 'test.txt';

//     const expectedFiles = [{
//       name: fileName,
//       content: 'This is a test file.'
//     }];

//     const req = {
//       query: {}
//     };
//     const res = {
//       json: function () { return [] }
//     };

//     await controller.getFiles(req, res);

//     expect(res.json).toHaveBeenCalledWith(expectedFiles);
//   });

// });

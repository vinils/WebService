const chai = require('chai')
  , chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;
  
chai.use(chaiHttp);

describe('test', () => {
  it('It should get simples json return', (done) => {
    chai.request(server)
      .get('/simpliest')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        // expect(res.body).to.include({
        //   "variable" : "temperature",
        //   "fields" : {
        //     "value" : 34.32,
        //     "quality" : 12
        //   },
        //   "tags" : {
        //     "equipementPath" : "SiteA/Line1/WorkUnit3",
        //     "ID" : "Sensor1"
        //   },
        //   "timestamp" : "2000-01-23T04:56:07.000+00:00"
        // });
        done();
      });
  });

  it('It should post simples json and return', (done) => {
    const simpleJson = {
      title: 'Awesome book',
      price: '$9.99',
      description: 'This is the awesome book'
    };

    chai.request(server)
      .post('/simpliest')
      .set('Accept', 'application/json')
      .send(simpleJson)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.include(simpleJson);
        done();
      });
  });
});

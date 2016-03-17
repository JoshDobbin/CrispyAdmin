var request = require('supertest');

describe('TestController', function() {

  describe('#ProcessMessage()', function() {
    it('should respond with message', function (done) {
      request(sails.hooks.http.app)
        .get('/test/ProcessMessage')
        //.send({ name: 'test', password: 'test' })
        .expect(200, done)
        //.expect('location','/mypage', done);
    });
  });

});
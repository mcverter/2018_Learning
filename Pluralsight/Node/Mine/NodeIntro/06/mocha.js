var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function() {
  describe('when used synchronously', function () {
    it('should double evens', function () {
      fun.evenDoublerSync(2).should.equal(4)
    })
    it('should error on ods', function (done) {
      (function () {
        fun.evenDoublerSync(3)
      }).should.throw(/Odd/);
      done();

    });


  });

  describe('when used asynchronously', function () {
    it('should even doubles', function (done) {
      fun.evenDoubler(2, function (err, results) {
        should.not.exist(err);
        should.equal(4);
        done();
      })
    })

    it('should error on odds', function (done) {
      fun.evenDoubler(3, function(err, results){
        should.exist(err);
        should.not.exist(results);
        done();
      })
    })
  })
})
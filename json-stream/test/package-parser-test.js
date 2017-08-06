const should = require('should');

describe('the package parse class',function(){
    it('should faild when assert 1+1=3',function(){
        (1+1).should.be.exactly(2);
    });
});
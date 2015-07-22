/* 
Tests for FakeStorage. 
Invoke npm run test
*/
var localStorage = require('./FakeStorage.js'),
should = require('should');

describe('Set items for Storage:', function() {
    it('Write 1st item (logTime => ISO Date String)', function(done) {
        localStorage.setItem('logTime', new Date().toISOString());
        localStorage.count.should.equal(1).and.be.a.Number;
        done();
    });
    
    it('Write 2nd item (counter => 5)', function(done) {
        localStorage.setItem('counter', 5);
        localStorage.count.should.equal(2);
        done();
    });
    
    it('Write 3rd item (name => \'Jessica\')', function(done) {
        localStorage.setItem('name', 'Jessica');
        localStorage.count.should.equal(3);
        done();
    });
});

describe('Get items from Storage:', function() {
   it('Get 2nd item (counter)', function(done) {
       console.log('counter => ' + localStorage.getItem('counter'));
       localStorage.getItem('counter').should.equal('5').and.be.a.String;
       done();
   });
   
   it('Get 1st item (logTime)', function(done) {
       console.log('logTime => ' + localStorage.getItem('logTime'));
       localStorage.getItem('logTime').should.be.a.String;
       done();
   });
   
   it('Get 3rd item (name)', function(done) {
       console.log('name => ' + localStorage.getItem('name'));
       localStorage.getItem('name').should.equal('Jessica').and.be.a.String;
       done();
   });
   
   it('Get key name at 0 index', function(done) {
       console.log(localStorage.key(0));
       localStorage.key(0).should.equal('logTime').and.be.a.String;
       done();
   });
   
   it('Get all items (keys and values)', function(done) {
       console.log(localStorage.getItems());
       localStorage.getItems().should.be.an.Array;
       done();
   });
});

describe('Overwrite and remove items:', function() {
    it('Overwrite item (name) => \'Amos\'', function(done) {
        localStorage.setItem('name', 'Amos');
        console.log('name => ' + localStorage.getItem('name'));
        localStorage.getItem('name').should.equal('Amos').and.be.a.String;
        done();
    });
    
    it('Remove 1st item (logTime)', function(done) {
        localStorage.removeItem('logTime');
        localStorage.count.should.equal(2);
        done();
    });
    
    it('Clear all remaining items (counter & name)', function(done) {
        localStorage.clear();
        localStorage.count.should.equal(0);
        done();
    });
});

/* 
Tests for FakeStorage. 
Invoke npm run test
*/
var localStorage = require('./FakeStorage.js'),
should = require('should');

describe('Set items for Storage:', function() {
    it('Write 1st item (logTime => ISO Date String)', function() {
        localStorage.setItem('logTime', new Date().toISOString());
        localStorage.count.should.equal(1).and.be.a.Number;
    });
    
    it('Write 2nd item (counter => 5)', function() {
        localStorage.setItem('counter', 5);
        localStorage.count.should.equal(2);
    });
    
    it('Write 3rd item (name => \'Jessica\')', function() {
        localStorage.setItem('name', 'Jessica');
        localStorage.count.should.equal(3);
    });
});

describe('Get items from Storage:', function() {
   it('Get 2nd item (counter)', function() {
       console.log('counter => ' + localStorage.getItem('counter'));
       localStorage.getItem('counter').should.equal('5').and.be.a.String;
   });
   
   it('Get 1st item (logTime)', function() {
       console.log('logTime => ' + localStorage.getItem('logTime'));
       localStorage.getItem('logTime').should.be.a.String;
   });
   
   it('Get 3rd item (name)', function() {
       console.log('name => ' + localStorage.getItem('name'));
       localStorage.getItem('name').should.equal('Jessica').and.be.a.String;
   });
   
   it('Get key name at 0 index', function() {
       console.log(localStorage.key(0));
       localStorage.key(0).should.equal('logTime').and.be.a.String;
   });
   
   it('Get all items (keys and values)', function() {
       console.log(localStorage.getItems());
       localStorage.getItems().should.be.an.Array;
   });
});

describe('Overwrite and remove items:', function() {
    it('Overwrite item (name) => \'Amos\'', function() {
        localStorage.setItem('name', 'Amos');
        console.log('name => ' + localStorage.getItem('name'));
        localStorage.getItem('name').should.equal('Amos').and.be.a.String;
    });
    
    it('Remove 1st item (logTime)', function() {
        localStorage.removeItem('logTime');
        localStorage.count.should.equal(2);
    });
    
    it('Clear all remaining items (counter & name)', function() {
        localStorage.clear();
        localStorage.count.should.equal(0);
    });
});

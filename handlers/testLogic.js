/* testLogic.js */
module.exports = function(options) {
  var seneca = this;

  seneca.add({role:'test', cmd:'test_1' }, test_1);
  seneca.add({role:'test', cmd:'test_2' }, test_2);
  //... other action definitions

  function test_1(args, done) {
    var itemId = args.itemId;
    
    done(null, { message: itemId, output: 'message received and processed' });
  }

  function test_2(args, done) {
    var itemName = args.name;
    
    done(null, { message: itemName, output: 'message received and processed' });
  }
}
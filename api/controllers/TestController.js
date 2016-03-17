/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	DoSomething: function(req, res) {
        return res.json({ status: "OK" });
    },
    
    ProcessMessage: function(req, res) {
        return MessageBus.publish({ role: 'test', cmd: 'test_1', itemId: '100' })
            .then(function(result){
                res.json(result)
            });
    },
    
    ProcessMessage2: function(req, res) {
        return MessageBus.publish({ role: 'test2', cmd: 'test_1', itemId: '100' })
            .then(function(result){
                res.json(result)
            });
    }
};


var seneca = require('seneca')(),
    Promise = require('bluebird'),
    requireDir = require('require-dir'),
    _ = require('lodash');


function MessageBus() {
    //initialization
    var plugins = requireDir('../../handlers', { recurse: true });
    
    sails.log.info('Loading SenecaJs plugins from ./handlers');
    
    _.each(plugins, function (plugindesc) {
        sails.log.debug('Seneca plugin loading:\n  ' + plugindesc);
        seneca.use(plugindesc)
    })
    
    
    //the function is wrapped because if you just try to pass the act function back 
    //then you get the situation described here: https://github.com/senecajs/seneca/issues/26
    var act = function(message, cb) {
      seneca.act(message, cb);  
    } 
    
    return {
        publish: Promise.promisify(act) //Make sure each call returns a promise
    };
}

module.exports = MessageBus();
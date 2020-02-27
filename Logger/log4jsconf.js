var log4jsConfig = function() {
  var log4js = require('D:/Mars_VoyagerAPI/node_modules/log4js/lib/log4js');   
  log4js.configure('D:/Mars_demo/Logger/log4js.json');
    var logger = log4js.getLogger("default"); //category of logging (file/console)
    this.logger = function() 
      {
       return logger;
      }
    };
    
    module.exports = new log4jsConfig();
var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../TestSuites/sampleTestCase.spec.js'] ,
    onPrepare: function() {
      
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: '../Reports/allure-reports'
      }));
    }
  
  };
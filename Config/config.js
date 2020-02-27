var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../TestSuites/sampleTestCase.spec.js'],
  capabilities: {


    'browserName': 'chrome',
    chromeOptions: {
      args: ["--headless"]
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: '../Reports/allure-reports'
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }

};
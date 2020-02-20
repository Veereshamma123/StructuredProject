//let AllureReporter = require("jasmine-allure-reporter");
var Jasmine = require('jasmine');
global.deviceName = 'Windows 10';
var now = new Date();
report_name = 'Report-' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
logfile_name = 'Results-' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
/* function Bin2HexUUID(png){
	var hex = new Buffer.from(png,'base64').toString('hex');
    return hex.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, function (){
        return arguments[1]+"-"+arguments[2]+"-"+arguments[3]+"-"+arguments[4]+"-"+arguments[5];
    });
} */

exports.config = {
		specs:   ['C:/Users/veereshamma.kake/eclipse-workspace/StructedProject/Spec_files/Login_Spec.js'],
		  //Jasmine framework is recommended
	    framework: 'jasmine',
	    allScriptsTimeout: 60000,
	    getPageTimeout: 60000,

		jasmineNodeOpts: {
	        defaultTimeoutInterval: 300000
	    },
	
			onPrepare: function () {
			 var AllureReporter = require("jasmine-allure-reporter");
		        browser.driver.manage().window().maximize();
		        global.EC = protractor.ExpectedConditions;
		       // var findRemoveSync = require('find-remove');
		      //  var result = findRemoveSync('Target/LastBuild/TestResult', {extensions: ['.png', '.xml']});
		        jasmine.getEnv().addReporter(new AllureReporter({resultsDir: '../Target/' + global.deviceName + "_" + report_name + '/' + logfile_name}));
		        jasmine.getEnv().afterEach(function (done) {
		            browser.takeScreenshot().then(function (png) {
		                allure.createAttachment('Screenshot', function () {
		                	  return new Buffer(png, 'base64')
		                }, 'image/png')()
		                done();
		            });
		        });
		    }
}
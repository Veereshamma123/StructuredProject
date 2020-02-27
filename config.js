var AllureReporter = require('jasmine-allure-reporter');
/* var reporter = new AllureReporter({
	allureReport:{
		resultDir: 'allure-results'
	}
}) */
global.deviceName = 'Windows 10';
var now = new Date();
//report_name = 'Report-' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
//logfile_name = 'Results-' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();


exports.config = {
		specs:   ['Spec_files/Login_Spec.js' ], //,'Spec_files/SearchProject&Client_Spec.js','Spec_files/Upload_Spec.js','Spec_files/SearchProject&Client_Spec.js', 'Spec_files/Add&Edit_Spec.js','Spec_files/Delete_Spec.js', 'Spec_files/Delete_Spec.js','Spec_files/Add&Edit_Spec.js','Spec_files/DeleteAll_Spec.js','Spec_files/Upload_Spec.js',
		  
		  //Jasmine framework is recommended
	    framework: 'jasmine',
	    allScriptsTimeout: 60000,
		getPageTimeout: 60000,
		  onPrepare: function(){
					browser.driver.manage().window().maximize();
					global.EC = protractor.ExpectedConditions;
					//For screenshots
						/* jasmine.getEnv().addReporter(
									new Jasmine2HtmlReporter({
										savePath: 'Target/screenshots'
									})
						); */
						//For HTml file
						jasmine.getEnv().addReporter(new AllureReporter());
    				jasmine.getEnv().afterEach(function(done){
      			browser.takeScreenshot().then(function (png) {
       		 allure.createAttachment('Screenshot', function () {
          	return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      }) 
    }); 
  },

		jasmineNodeOpts: {
	        defaultTimeoutInterval: 300000
	    },
	
			/*  //Preparation and Reporting
			  jasmine.getEnv().addReporter(new AllureReporter({resultsDir: '../Target/' + global.deviceName + "_" + report_name + '/' + logfile_name}));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')()
                done();
            });
        }); */
}
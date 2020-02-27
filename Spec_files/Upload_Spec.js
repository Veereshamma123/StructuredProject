var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var UploadFilePage = require('./../Page_Files/Upload_Page.js');
var UploadFile = new UploadFilePage();
browser.ignoreSynchronization=true;
describe("Upload files", function () {
         it('Upload File', function(){
			UploadFile.uploadfile();

		 })
		})
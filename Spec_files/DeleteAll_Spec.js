var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var DeleteAllPage = require('./../Page_Files/DeleteAll_Page.js');
var DeleteAll = new DeleteAllPage();
browser.ignoreSynchronization=true;
describe("Delete stores", function () {
         it('Delete All', function(){
			DeleteAll.deleteall();

		 })
		})
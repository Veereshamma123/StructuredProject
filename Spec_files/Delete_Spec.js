var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var DeletePage = require('./../Page_Files/Delete_Page.js');
var Delete = new DeletePage();
browser.ignoreSynchronization=true;
describe("Delete stores", function () {
         it('Delete single record ', function(){
			Delete.delete();

		 }),
		 it('verifying the deleted toast message', function(){
			// Delete.verifytoastMessage();
		 })
		})
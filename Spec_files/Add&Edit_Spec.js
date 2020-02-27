var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var AddEdit = require('./../Page_Files/Add&Edit_Page.js');
var addEdit = new AddEdit();
var AddEditData = require('./../Data_Files/Add&Edit_Data.js');

browser.ignoreSynchronization=true;
describe("Add data", function () {
         it('Add manual row in the Store location', function(){
			// console.log(uuid.id);
           addEdit.addStoreLocation();
		 }),
		 it('Verify toast message', function(){
			addEdit.toastMessage();
		 }),
		 it('Edit STORE location', function(){
			addEdit.editStoreLocation();
		 })
        
    })



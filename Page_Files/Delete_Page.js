var DeleteLocator = require('./../Locators/Delete_Locator.js');
var uuid= require('./../Page_Files/Random_uuid.js')
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var Delete_Page = function () {
};

Delete_Page.prototype = Object.create({}, {
    delete:{
        value: function(){

			wrap.click(wrap.locateElement("id", DeleteLocator.Delete.storeLocations));
			wrap.clear(wrap.locateElement("id", DeleteLocator.Delete.filter));
			wrap.input(wrap.locateElement("id", DeleteLocator.Delete.filter), uuid.id) //Entering the id in Filter
			wrap.click(wrap.locateElement("css", DeleteLocator.Delete.reload));

			browser.sleep(2002);
				wrap.click(wrap.locateElement(wrap.locateElement("css", DeleteLocator.Delete.deleteIcon)));
					//console.log("Store id doesn't exists");
				

		        }
	},
	verifytoastMessage:{
        value: function(){
			//wrap.isElementPresent(wrap.locateElement("className", DeleteLocator.Delete.popup));
			wrap.child2(wrap.locateElement(DeleteLocator.Delete.yesButton_parent, DeleteLocator.Delete.yesButton_child));
			//wrap.compareText(wrap.locateElement("cssContainingText", DeleteLocator.Delete.toastMessage), "Location deleted.");
		

		}
	}
});
		
module.exports = Delete_Page;

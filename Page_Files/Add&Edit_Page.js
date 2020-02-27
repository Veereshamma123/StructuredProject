var AddEditData = require('./../Data_Files/Add&Edit_Data.js');
var AddEditLocator = require('./../Locators/Add&Edit_Locators.js');
var uuid= require('./../Page_Files/Random_uuid.js')
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var Add_Edit_Page = function () {
};


Add_Edit_Page.prototype = Object.create({}, {
    addStoreLocation:{
        value: function(){
			browser.sleep(1000);
			wrap.click(wrap.locateElement("id",AddEditLocator.add.storeLocations));
			wrap.click(wrap.locateElement("id", AddEditLocator.add.addButton));
			wrap.input(wrap.locateElement("id", AddEditLocator.add.storeId),uuid.id);
			wrap.input(wrap.locateElement("id",AddEditLocator.add.address),AddEditData.Add.address);
			wrap.input(wrap.locateElement("id", AddEditLocator.add.city), AddEditData.Add.city);
			wrap.input(wrap.locateElement("id",AddEditLocator.add.state),AddEditData.Add.state);
			wrap.input(wrap.locateElement("id", AddEditLocator.add.zip), AddEditData.Add.zip);
			wrap.click(wrap.locateElement("id", AddEditLocator.add.save));
		        }
	},
	toastMessage:
	{
		value:function(){
			wrap.compareText(wrap.locateElement("css",AddEditLocator.toast.toastMessage),AddEditData.Add.toastMessage);
		}
	},
	editStoreLocation:{
		value: function(){
			wrap.click(wrap.locateElement("css", AddEditLocator.edit.back));
			 wrap.input(wrap.locateElement("id", AddEditLocator.edit.filterbutton),uuid.id);
			wrap.click(wrap.locateElement("css", AddEditLocator.edit.reload));
			browser.sleep(3002);	
			wrap.click(wrap.locateElement("css", AddEditLocator.edit.editIcon));	
			browser.sleep(1002);	
		
	//Editing the value in City field 
	wrap.click(wrap.locateElement("css", AddEditLocator.edit.editCity));
	wrap.clear(wrap.locateElement("css", AddEditLocator.edit.editCity));
	wrap.input(wrap.locateElement("css", AddEditLocator.edit.editCity), AddEditData.Edit.editCity);
	//Clicking the save icon after entering the edited text 
	wrap.click(wrap.locateElement("css", AddEditLocator.edit.editSave));

	//wrap.isElementPresent(wrap.locateElement("cssContainingText",AddEditLocator.edit.toast, AddEditData.Edit.toast));
	wrap.compareText(wrap.locateElement("cssContainingText",AddEditLocator.edit.toast),AddEditData.Edit.toast); 

	}
	
}
});
				

module.exports = Add_Edit_Page;

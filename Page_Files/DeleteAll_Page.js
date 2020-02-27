var DeleteAllLocator = require('./../Locators/DeleteAll_Locators.js');
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var DeleteAll_Page = function () {
};


DeleteAll_Page.prototype = Object.create({}, {
    deleteall:{
        value: function(){

			wrap.click(wrap.locateElement("id", DeleteAllLocator.DeleteAll.locations));
			wrap.click(wrap.locateElement("id", DeleteAllLocator.DeleteAll.deleteAllButton));
			wrap.isElementPresent(wrap.locateElement("className",DeleteAllLocator.DeleteAll.popup));
			wrap.child2(DeleteAllLocator.DeleteAll.yesButton_parent, DeleteAllLocator.DeleteAll.yesButton_child);
			wrap.isElementPresent(wrap.locateElement("cssContainingText", DeleteAllLocator.DeleteAll.recordsCount));

		        }
	}
});
				

module.exports = DeleteAll_Page;

	/* //Delete all locations
	this.locations=element(by.id('menu_Locations'));
	this.deleteAllButton=element(by.id('btn_ClearAll'));
	this.popup=element(by.className("cdk-overlay-pane"));
	this.yesButton=element(by.css("div[class='confirmation-dialog-actions mat-dialog-actions']")).element(by.css("button:nth-child(2)"));
	this.recordsCount=element(by.cssContainingText("div[class='mat-paginator-range-actions'] div[class='mat-paginator-range-label']", "0 of 0")); */
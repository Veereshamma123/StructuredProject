var UploadLocate = require('./../Locators/Upload_Locators.js');
var UploadData = require('./../Data_Files/Upload_Data.js');
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var path = require('path');
var Upload_File = function () {
};


Upload_File.prototype = Object.create({}, {
    uploadfile:{
        value: function(){
			browser.sleep(1000);
			wrap.click(wrap.locateElement("id", UploadLocate.Upload.storeLocations));
			wrap.click(wrap.locateElement("id",UploadLocate.Upload.uploadButton));
			browser.sleep(3333);
			var absolutePath =  path.resolve(UploadData.Upload.fileToUpload);
			var remote = require('./../node_modules/protractor/node_modules/selenium-webdriver/remote');
			browser.setFileDetector(new remote.FileDetector());
			browser.sleep(3434);
			element(by.css('input[type="file"]')).sendKeys(absolutePath);
			//wrap.input(wrap.locateElement("css",UploadLocate.Upload.browse),absolutePath); //Clicking on 'Browse' area
			browser.sleep(2222);
			wrap.click(wrap.locateElement("className", UploadLocate.Upload.importButton));
			browser.sleep(2222);

		        }
	}
});

module.exports = Upload_File;

/* 
// set file detector
var remote = require('../../node_modules/protractor/node_modules/selenium-webdriver/remote');
browser.setFileDetector(new remote.FileDetector());


var fileToUpload = '../sample.txt';
var absolutePath = path.resolve(__dirname, fileToUpload);

var fileElem = element(by.css('input[type="file"]'));

// Unhide file input
browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());

fileElem.sendKeys(absolutePath);

// take a breath 
browser.driver.sleep(100);

// click upload button
element(by.css('button[data-ng-click="uploadFile(file)"]')).click(); // does post request */


/* 
this.storeLocations=element(by.id('menu_StoreLocations'));
	this.uploadButton=element(by.id('btn_ImportStores'));
	this.browse=element(by.css('input[type="file"]'));
	this.importButton=element(by.className("mat-raised-button mat-primary"));
	this.toastMessage=element(by.css("div[class='snack-bar-text']")); */
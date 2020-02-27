var SearchProjectData = require('./../Data_Files/SearchProjects&Client_Data.js');
var SearchPageLocators = require('./../Locators/SearchProject&Client_Locators.js');
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var SearchProject_Page = function () {
};


SearchProject_Page.prototype = Object.create({}, {
    currentProject:{
        value: function(){
          browser.sleep(4500);
          wrap.child(SearchPageLocators.project.crntPrjct_parent, SearchPageLocators.project.crntPrjct_child);
        }
    },
    search_project: {
        value: function(){
            wrap.isElementPresent(wrap.locateElement("id",SearchPageLocators.project.filter));
            wrap.input(wrap.locateElement("id",SearchPageLocators.project.filter),SearchProjectData.project.projectId)
        }
    },
    expand_project: {
        value: function(){
            wrap.isElementPresent(wrap.locateElement("css",SearchPageLocators.project.rows));
          /*   if(SearchPageLocators.search.rows.isPresent()){
                SearchPageLocators.search.allRows.search(function(store){
                    store.wrap.getTextValue(wrap.locateElement("css", SearchPageLocators.search.projectnames)).then(function(text){
                        if(text==SearchProjectData.project.projectId){
                            console.log(text+ " - Project id11 is found");
                        }
                    })
                })
            } */

            wrap.compareText(wrap.locateElement("css", SearchPageLocators.project.projectId), SearchProjectData.project.projectId);
            wrap.click(wrap.locateElement("id", SearchPageLocators.project.openIcon));
        }
    },
    view_client:{
        value: function(){
            wrap.isElementPresent(wrap.locateElement("id",SearchPageLocators.client.viewClientButton));
            wrap.click(wrap.locateElement("id",SearchPageLocators.client.viewClientButton));
        }
    },
    new_tab:{
        value: function(){
            		browser.sleep(1000);
			// Switching to Client tab
			browser.getAllWindowHandles().then(function (handles)
			{
				browser.switchTo().window(handles[1]);
                wrap.verifyTitle("sample");
                wrap.isElementPresent(wrap.locateElement("xpath", SearchPageLocators.client.clientName));
                wrap.compareText(wrap.locateElement("xpath", SearchPageLocators.client.clientName),SearchProjectData.client.clientName);
            })
        }			
        
    }

});
				

module.exports = SearchProject_Page;

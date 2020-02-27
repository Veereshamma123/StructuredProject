var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var searchProjectPage = require('./../Page_Files/SearchProject&Client_Page.js');
var srchPrjctPage = new searchProjectPage();
browser.ignoreSynchronization=true;
describe("Search Project", function () {
         it('Clicking on Current Projects', function(){
           browser.sleep(1000);
           srchPrjctPage.currentProject();
        }),
        it('Search the project name', function(){
          srchPrjctPage.search_project();
        }),
        it('Expand the project', function(){
           srchPrjctPage.expand_project();
        }),
        it('Open the View Client button', function(){
          srchPrjctPage.view_client();
        }),
        it('Switching to the new tab and comparing the client name', function(){
          srchPrjctPage.new_tab();
          browser.sleep(3333);
          
        })

    })



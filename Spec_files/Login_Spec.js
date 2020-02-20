var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();
var loginpage = require('./../Page_Files/Login_Page.js');
var sapphireLogin = new loginpage();
var loginTestData = require('./../Data_Files/Login_Data.js');

browser.ignoreSynchronization=true;
describe("Intake Login", function () {
         it('Enter the URL in the browser', function(){
            sapphireLogin.url(loginTestData.LoginData.url);
            //rl(loginTestData.LoginData.url);
        }),
        it('Widget comparision and click on Login', function(){
           sapphireLogin.widget();
        }),
        it('Entering Username and clicking on next button', function(){
            sapphireLogin.username();
        }),
        it('Entering password and clicking on signIn button', function(){
            sapphireLogin.password();
        }),
        it('Clicking on YES in Stay signed page ', function(){
            sapphireLogin.stayIn();
        }),
        it('Verifying the title', function(){
            sapphireLogin.currentTitle();
        })
        
       

    })



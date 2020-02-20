var loginTestData = require('./../Data_Files/Login_Data.js');
var loginPageLocators = require('./../Locators/Login_Locators.js');
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var Loginpagep = function () {
};


Loginpagep.prototype = Object.create({}, {
    url:{
        value: function(APP_URL){
            browser.get(APP_URL);
        }
    },
    widget: {
        value: function(){
             wrap.isElementPresent(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.Widget));
              wrap.click(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.loginButton));
        }
    },
    username: {
        value: function(){
             wrap.input(wrap.locateElement("name", loginPageLocators.IntakeLoginPage.emailId), loginTestData.LoginData.username);
            wrap.click(wrap.locateElement("id", loginPageLocators.IntakeLoginPage.nextButton));
        }
    },
    password: {
        value: function(){
             wrap.input(wrap.locateElement("name", loginPageLocators.IntakeLoginPage.password),loginTestData.LoginData.password);
            wrap.click(wrap.locateElement("id",loginPageLocators.IntakeLoginPage.signIn));
        }
    },
    stayIn:{
        value: function(){
            wrap.click(wrap.locateElement("id",loginPageLocators.IntakeLoginPage.yesButton));
            wrap.compareText(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.title), loginTestData.LoginData.title);
        }
    },
    currentTitle:{
         value: function(){wrap.compareText(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.title), loginTestData.LoginData.title);
    }
},
   loginApp: {
        value: function (APP_URL) {
        	console.log("Entered");
           browser.get(APP_URL);
            wrap.isElementPresent(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.Widget));
            wrap.click(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.loginButton));
            browser.sleep(3000);
            wrap.input(wrap.locateElement("name", loginPageLocators.IntakeLoginPage.emailId), loginTestData.LoginData.username);
            wrap.click(wrap.locateElement("id", loginPageLocators.IntakeLoginPage.nextButton));
            wrap.input(wrap.locateElement("name", loginPageLocators.IntakeLoginPage.password),loginTestData.LoginData.password);
            wrap.click(wrap.locateElement("id",loginPageLocators.IntakeLoginPage.signIn));
            wrap.click(wrap.locateElement("id",loginPageLocators.IntakeLoginPage.yesButton));
            wrap.compareText(wrap.locateElement("className", loginPageLocators.IntakeLoginPage.title), loginTestData.LoginData.title);
        }
    } 
});

module.exports = Loginpagep;

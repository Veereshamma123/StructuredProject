var loginTestData = require('./../Data_Files/Login_Data.js');
var loginPageLocators = require('./../Locators/Login_Locators.js');
var mainWrapper = require('./../Utilities/Wrapper.js');
var wrap = new mainWrapper();

var Loginpagep = function () {
};


Loginpagep.prototype = Object.create({}, {
    currentProject:{
        value: function(){
           
        }
    },
    projectName_Expand: {
        value: function(){
            
        }
    }
});

module.exports = Loginpagep;

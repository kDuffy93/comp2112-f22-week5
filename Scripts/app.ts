"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function()
{
    /**
     * This function loads data Asynchronously from a URL.
     * It calls the callback function when the data loading is complete
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    

    // First method of using functions
    function Start()
    {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[0]);
        });
    }

    window.addEventListener("load", Start);

})();
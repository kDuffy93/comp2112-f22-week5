"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
  // First method of using functions
  function Start() {
    console.log("App Started!");

    let contactList;

    $.getJSON("./Data/contacts.json", function (DataSource) {
      contactList = DataSource.ContactList;

      // load data into objects
      let contact = new Contact();
      console.log(contact.toString());
    });
  }

  window.addEventListener("load", Start);
})();

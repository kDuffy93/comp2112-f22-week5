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

      for (const contact of contactList) {
        let newContact = new Contact(
          contact.FullName,
          contact.ContactNumber,
          contact.EmailAddress
        );
        console.log(newContact.toString());
      }
    });
  }

  window.addEventListener("load", Start);
})();
"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
  /**
   *this method saved our data to local storage
   *
   * @param {any[]} contactList
   */
  function saveContactListData(contactList: any[]): void {
    let count = 0;
    for (const contact of contactList) {
      let newContact = new Contact(
        contact.FullName,
        contact.ContactNumber,
        contact.EmailAddress
      );
      localStorage.setItem(count.toString(), newContact.toJSON());
      count++;
    }
  }
  /**
   *this method reads out data from localStorage and returns a contact array
   *
   * @return {*}  {Contact[]}
   */
  function loadContactListData(): Contact[] {
    let ContactArray = new Array<Contact>();

    let keys = Object.keys(localStorage);
    for (const key of keys) {
      let newContact = new Contact();
      newContact.fromJSON(localStorage.getItem(key));
      ContactArray.push(newContact);
    }
    return ContactArray;
  }
  // First method of using functions
  function Start() {
    console.log("App Started!");

    $.getJSON("./Data/contacts.json", function (DataSource) {
      let contactList: any[] = DataSource.ContactList;
      saveContactListData(contactList);
      let contactArray = loadContactListData();

      for (const contact of contactArray) {
        console.log(contact.toString());
      }
    });
  }

  window.addEventListener("load", Start);
})();

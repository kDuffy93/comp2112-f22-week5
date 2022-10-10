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

  function LoadHeader(): void {
    $.get("./views/components/header.html", function (html_data) {
      //vanilla js
      //document.getElementsByTagName("header")[0].innerHTML = html_data;

      //jquery
      $("header").html(html_data);
      $("#homePage").addClass("active");

      //js
      let elementArray = document.querySelectorAll("li>a.nav-link");
      for (const element of elementArray as HTMLAnchorElement[]) {
       console.log(element.href);
      }
      //jquery
$("li>a.nav-link").each(function(link){
console.log($(this).prop("href");
    });

    });
  }


  function LoadFooter(): void {
    $.get("./views/components/footer.html", function (html_data) {
      $("footer").html(html_data);
    });
  }
  // First method of using functions
  function Start() {
    console.log("App Started!");
    LoadHeader();
    LoadFooter();
  }

  window.addEventListener("load", Start);
})();

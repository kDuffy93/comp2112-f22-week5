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
      //change title
      $("header").html(html_data);
        $("li>a#Home").addClass("active");

      $("li>a").on("click", function (event) {
        event.preventDefault();
        document.title = $(this).prop("id") as string;
        //change url
        history.pushState({}, "", "/" + document.title);
         $("li>a").each(function () {
           $(this).removeClass("active");
         });
        $("li>a#" + document.title).addClass("active");
        LoadContent();
      });
    });
  }

  function LoadFooter(): void {
    $.get("./views/components/footer.html", function (html_data) {
      $("footer").html(html_data);
    });
  }

  function LoadContent(): void {

    let contentLink = document.title.toLowerCase();



   $.get(`./views/content/${contentLink}.html`, function (html_data) {$("main").html(html_data);});
  }

  // First method of using functions
  function Start() {
    console.log("App Started!");
    document.title = "Home";
    history.pushState({}, "", "/Home");
     

    LoadContent();
    LoadHeader();

    LoadFooter();

  }

  window.addEventListener("load", Start);
})();

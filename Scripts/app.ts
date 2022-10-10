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
      $("header").html(html_data);
      $("li>a").on("click", function () {
        let title =$(this).prop("id") as string;
        document.title =  title.substring(0, 1).toUpperCase() + title.substring(1); 
        LoadContent();
      })
     
    });
  }

  function LoadFooter(): void {
    $.get("./views/components/footer.html", function (html_data) {
      $("footer").html(html_data);
    });
  }

  function LoadContent(): void {
    switch (document.title) {
      case "Home":
        $.get("./views/content/home.html", function (html_data) {
          $("main").html(html_data);
        });
        break;
      case "About":
        $.get("./views/content/about.html", function (html_data) {
          $("main").html(html_data);
        });

        break;
      case "Projects":
        $.get("./views/content/projects.html", function (html_data) {
          $("main").html(html_data);
        });

        break;
      case "Services":
        $.get("./views/content/services.html", function (html_data) {
          $("main").html(html_data);
        });

        break;
      case "Contact":
        $.get("./views/content/contact.html", function (html_data) {
          $("main").html(html_data);
        });

        break;
      default:
        break;
    }
  }

  // First method of using functions
  function Start() {
    console.log("App Started!");
    document.title = "Home";
    LoadContent();
    LoadHeader();
  

    LoadFooter();
  }

  window.addEventListener("load", Start);
})();

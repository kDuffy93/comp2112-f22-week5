class Contact {
    //pvt instance members
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(number) {
        this.contactNumber = number;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(email) {
        this.emailAddress = email;
    }
    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName=""]
     * @param {string} [contactNumber=""]
     * @param {string} [emailAddress=""]
     * @memberof Contact
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //public methods
    /**
     *this method overrides the built in toString method for the contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Full Name     : ${this.FullName}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Email Address : ${this.EmailAddress}\n`;
        return outputString;
    }
}
//# sourceMappingURL=contacts.js.map
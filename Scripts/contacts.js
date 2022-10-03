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
    /**
     *this method converts class data members to a comma separated list compatible with json
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
    }
    /**
     *reads data from a comma separated list and assigns it to class data members
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        let stringArray = data.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }
}
//# sourceMappingURL=contacts.js.map
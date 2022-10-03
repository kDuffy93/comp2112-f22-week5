class Contact {
  //pvt instance members
  private fullName: string;
  private contactNumber: string;
  private emailAddress: string;

  //public properties
  get FullName(): string {
    return this.fullName;
  }
  set FullName(name: string) {
    this.fullName = name;
  }
  get ContactNumber(): string {
    return this.contactNumber;
  }
  set ContactNumber(number: string) {
    this.contactNumber = number;
  }
  get EmailAddress(): string {
    return this.emailAddress;
  }
  set EmailAddress(email: string) {
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
  constructor(
    fullName: string = "",
    contactNumber: string = "",
    emailAddress: string = ""
  ) {
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
  public toString(): string {
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
  public toJSON(): string {
    return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
  }

  /**
   *reads data from a comma separated list and assigns it to class data members
   *
   * @param {string} data
   * @memberof Contact
   */
  public fromJSON(data: string): void {
    let stringArray: string[] = data.split(",");
    this.FullName = stringArray[0];
    this.ContactNumber = stringArray[1];
    this.EmailAddress = stringArray[2];
  }

  //pvt methods
}

class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "First Name: " + this.firstName
            + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city
            + ", State: " + this.state
            + ", Zip: " + this.zip
            + "\nPhone Number: " + this.phoneNumber
            + ", Email: " + this.email;
    }
}
console.log("Welcome to the Address Book Program");
try {
    let detailsArray = new Array();
    detailsArray.push(new Contact("Samiksha", "Shende", "RamNagar", "Wardha", "Maharashtra", "442 001",
        "91 7643112366", "shende.samiksha@gmail.com"));
    detailsArray.push(new Contact("Neha", "Diwate", "Nalod", "Ahmedabad", "Gujrat",
        "369 785", "91 7658708428", "neha89@gmail.com"));
    detailsArray.push(new Contact("Apurva", "Ikhe", "Panzarapol", "Vadodara", "Gujrat",
        "963 698", "91 7525752131", "apurva.ikhe@gmail.com"));
    detailsArray.push(new Contact("Pratiksha", "Thute", "Virat", "Airoli", "Maharashra",
        "852 475", "91 8624592165", "pratikshathute@gmail.com"));
    console.log("\ncontacts before being updated\n");

    detailsArray.forEach((contact) => console.log(contact.toString()));

    detailsArray.filter(contact => contact.firstName == "Pratiksha").map(contact => contact.firstName = "Sakshi");
    console.log("\ncontacts after being updated\n");
    detailsArray.forEach((contact) => console.log(contact.toString()));

    let index = detailsArray.findIndex(contact => contact.firstName == "Neha");
    detailsArray.splice(index, 1);
    console.log("\naddress book after deleting contct");
    detailsArray.forEach((contact) => console.log(contact.toString()));
}
catch (e) {
    console.log(e);
}
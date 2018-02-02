const SHA256 = require("crypto-js/sha256");

class Data {

    // Arbitrary data to construct a node that will be held in
    // a series in each block
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

// Export Node object
module.exports = Data;

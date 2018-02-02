const SHA256 = require("crypto-js/sha256");

/*
    This simple block will contain a series of nodes
    that can contain any arbitrary data type whether it
    be transaction data, company records/documents, etc.

    It will contain these instance variables:
    - Index (block index number)
    - Timestamp (timestamp of block creation date)
    - Data (the series of nodes that the block is made up of)
    - Previous Hash (the hash of the previous block)
    - Hash (the hash for the current block)
*/

class Block {

    // Constructor for when a block is created
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
    }

    // Here we calculate the hash for this block using:
    // - The block's index
    // - The hash of the previous block
    // - The timestamp of when this block was created
    // - The string representation of the data JS object
    //
    // Really the goal here is a unreplicable hash that is completely
    // dependent on this block's data so that inconsistencies in the
    // blockchain can be identified quickly & false insertions and deletions
    // can be caught and corrected.
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

// Export block object
module.exports = Block;

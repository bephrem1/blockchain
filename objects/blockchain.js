const util = require('../util/utilities.js');
const Block = require('../objects/block');

class Blockchain {

    /*
        This is the overarching blockchain that consists of a series
        of blocks.

        It will contain these instance variables:
        - Chain (the array of blocks that make up the blockchain)
    */

    // Initialize the blockchain with a beginning block that is basically like
    // the null head in a Java Linked-List implementation
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    // Function that creates the first block in the block chain.
    // We provide the to the constructor these variables:
    // Index -> 0
    // Timestamp -> finds now in epoch time
    // Data -> null
    // Previous Hash -> null
    createGenesisBlock() {
        return new Block(0, util.getNowAsEpoch(), 'genesis', '0');
    }

    // Gets the latest block in the blockchain
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Adds a block to the blockchain
    addBlock(newBlock) {
        // Set the new block's previous hash field to the latest block's hash
        newBlock.previousHash = this.getLatestBlock().hash;

        // Set the hash of the new block now that it has the hash of its
        // previous block
        newBlock.hash = newBlock.calculateHash();

        // Add the block to the chain
        this.chain.push(newBlock);
    }

    // Validate the chain by checking the current chain's hash against its previous
    // to insure that the link is valid AND recalculate the current block's hash
    // to see if it has been tampered with
    isChainValid() {
        let invalidBlocks = [];
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Current block's hash miscalculates
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                invalidBlocks.push(i)
            }

            // Current block's previousHash doesn't match to the previous block's hash
            if (currentBlock.previousHash !== previousBlock.hash) {
                // TODO: Should check if this index has already been pushed but whatever for now
                invalidBlocks.push(i);
            }
        }

        if(invalidBlocks.length == 0){
            return {
                result: true
            };
        } else {
            return {
                result: false,
                invalidBlocks
            };
        }
    }

}

// Export blockchain object
module.exports = Blockchain;

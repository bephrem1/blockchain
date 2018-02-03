const express = require('express');
const router = express.Router();

// Inporting credentials kept separate as constants as always
const credentials = require('../credentials');

// Importing blockchain objects for use to demonstrate blockchain qualities
const Blockchain = require('../objects/blockchain');
const Block = require('../objects/block');
const Data = require('../objects/data');

const dataBlockChain = new Blockchain();

// GET '/'
router.get('/', function(req, res, next) {

    // In reality this would occur distributed and with more compensative qualities
    // to resolve incorrect blocks. But for example purposes it suffices

    // In reality there would be a distributed system, proof of work validation,
    // and alot more helper functions to help brevity


    dataBlockChain.addBlock(new Block(1, 1517542370, [new Data("ben", "ephrem")], dataBlockChain.getLatestBlock().hash));
    dataBlockChain.addBlock(new Block(2, 1517542578, [new Data("michael", "wein")], dataBlockChain.getLatestBlock().hash));
    dataBlockChain.addBlock(new Block(3, 1517543621, [new Data("john", "lon"), new Data("suzy", "doozy")], dataBlockChain.getLatestBlock().hash));

    // Set headers and send the example response
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.stringify(dataBlockChain));
});

// GET '/breakchain'
router.get('/breakchain', function(req, res, next) {

    // Invalidate chain by deleting the 2nd block (index to delete, amount of indicies to delete from that index on)
    dataBlockChain.chain.splice(1, 1);

    // Get the result of validation
    const validationResult = dataBlockChain.isChainValid();

    // Set header type
    res.setHeader('Content-Type', 'application/json');

    // If the blockchain is valid return true
    // If the blockchain is invalid the result will be false and the invalid index will be pointed out
    if(validationResult.result === true){
        return res.json({
            result: validationResult.result
        });
    } else{
        return res.json({
            result: validationResult.result,
            invalidBlocks: validationResult.invalidBlocks
        });
    }
});

// GET '/tamper'
router.get('/tamper', function(req, res, next) {

    // Invalidate chain by mssing with the data in block 2
    /*
        Delete this next line, save, restart the server, visit '/' to restore the blockchain, and then visit this 'tamper' uri again.
        There is no issue and the block chain is valid.
    */
    dataBlockChain.chain[2].data = [new Data("I've tampered", "with the data")];

    // Get the result of validation
    const validationResult = dataBlockChain.isChainValid();

    // Set header type
    res.setHeader('Content-Type', 'application/json');

    // If the blockchain is valid return true
    // If the blockchain is invalid the result will be false and the invalid index will be pointed out
    if(validationResult.result === true){
        return res.json({
            result: validationResult.result
        });
    } else{
        return res.json({
            result: validationResult.result,
            invalidBlocks: validationResult.invalidBlocks
        });
    }
});

module.exports = router;

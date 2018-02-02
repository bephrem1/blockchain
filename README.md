# blockchain
Simple example of a self-validating blockchain using a linked structure and Object Oriented JavaScript running on a Node.js web server.

A distributed immutable ledger is the result of distributing ledgers and performing frequent validation across recipients to spot tampering and fixing the tampered ledger. Knowing that the system can validate individual blocks (with each node having a hash that validates its neighbor), one then has the ability to put trust in the chain of blocks that will result from a syndication of the blocks of records.

This is the basis of trust in a blockchain structure and is what gives it the ability to replace intermediaries in any system where a blockchain is applicable.

This example is simple blockchain whose logic could be distributed but ledger reconciliation has not been implemented.

### To Try This Application
1.) clone the repo
2.) cd to the directory the project is in
3.) run 'npm install' and 'npm update' to make sure all node_modules are installed and updated
4.) run 'npm start' or 'nodemon' (if you have nodemon installed globally)
5.) go to http://localhost:3000/ ... this will create a sample blockchain and present it in JSON
6.) go to http://localhost:3000/breakchain ... this will remove the first link in the blockchain. You will get a response that looks like this:
```
{
  "result": false,
  "invalidBlocks": [
    1
  ]
}
```
If you remove the code in break chain and just output the validateChain() method's result you will see:
```
{
  "result": true
}
```
The chain is valid and no blocks are invalid
7.) And that's pretty much the demo

### Again
This is a really simple demo and really a pseudo-linked-list enforced with hashes so it is cool to see the concept in action on a local system. In reality once the invalid block is found then the client's block will have to be audited and corrected by looking at other peer's blocks, etc. but that is beyond the scope of this example

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Config

suggestion： you'd better deploying this demo in test network such as sepolia ( chainId:11155111, you can add it to metamask from https://chainList.org )

before running deploy command, you need to copy content of .env.example to .env and config your own infura api key and test account private key in .env, which can be find in https://www.infura.io/

and you need to apply some Sepolia ether to your contract account from fault:
https://www.infura.io/faucet/sepolia

## Start Tasks

Try running some of the following tasks:

```shell

# Compile all contracts (.sol) in the contracts folder and generate artifacts and cache
pnpm run compile

# Test contracts according to all scripts (.ts) in the scripts folder
pnpm run test

# Deploy contracts according to the configuration in hardhat.config.ts
pnpm run deploy

``` 

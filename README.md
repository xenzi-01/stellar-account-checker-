
# Stellar Account Checker

A TypeScript command-line tool that looks up a Stellar testnet account and prints its balances and sequence number.

## What it shows
- Account ID
- Sequence number
- Balance of every asset the account holds (XLM and others)

## Built with
- TypeScript
- Stellar SDK (`@stellar/stellar-sdk`)
- Horizon testnet server

## How to run
1. Install Node.js
2. Install the packages:

```
npm install
```

3. Run it with a testnet public key (starts with G):

```
npm start -- <public-key>
```

Get a funded testnet account from Stellar Lab's Friendbot.

## Ideas for later
- Add a `--network` flag for mainnet
- Show recent payments for the account
- Handle accounts that do not exist with a clearer message

## Author
Abdullahi Lawal (xenzi-01)

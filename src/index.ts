import { Horizon } from "@stellar/stellar-sdk";

const publicKey = process.argv[2];

if (!publicKey) {
  console.error("Usage: npm start -- <public-key>");
  process.exit(1);
}

const server = new Horizon.Server("https://horizon-testnet.stellar.org");

try {
  const account = await server.loadAccount(publicKey);

  console.log("Account: ", account.accountId());
  console.log("Sequence:", account.sequenceNumber());
  console.log("Balances:");

  for (const b of account.balances) {
    const name = b.asset_type === "native" ? "XLM" : "asset_code" in b ? b.asset_code : b.asset_type;
    console.log(`  ${name}: ${b.balance}`);
  }
} catch (err) {
  console.error("Could not load account:", (err as Error).message);
  process.exit(1);
}

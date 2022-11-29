// arc 0069 implemented here
require("dotenv").config();
const algosdk = require('algosdk');

const accounts = require('../NFT-2/accounts.json');

async function createAsset(algodClient, alice) {
    console.log("");
    console.log("==> CREATE ASSET");

    const accountInfo = await algodClient.accountInformation(alice.public_key).do();
    const startingAmount = accountInfo.amount;
    console.log("Alice account balance: "+startingAmount+" microAlgos");

    // Construct the transaction
    const params = await algodClient.getTransactionParams().do();

    // Whether user accounts will need to be unfrozen before transacting    
    const defaultFrozen = false;
    // Used to display asset units to user    
    const unitName = "ART0069";
    // Friendly name of the asset    
    const assetName = "Derek's Artwork 0069";
    // Optional string pointing to a URL relating to the asset
    const url = "ipfs://bafkreig5w64t7dbjo7sue55tpmc7nd7uwynvggwn2wefzwakupyazhjk2e#i";

    const managerAddr = alice.public_key // OPTIONAL: FOR DEMO ONLY, USED TO DESTROY ASSET WITHIN

    const reserveAddr = undefined;
  
    const freezeAddr = undefined;
    
    const clawbackAddr = undefined;

    const decimals = 0;
    const total = 1; // how many of this asset there will be

    // signing and sending "txn" allows "addr" to create an asset 
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from: alice.public_key,
        total,
        decimals,
        assetName,
        unitName,
        assetURL: url,
        defaultFrozen,
        freeze: freezeAddr,
        manager: managerAddr,
        clawback: clawbackAddr,
        reserve: reserveAddr,
        suggestedParams: params,
    });

    const {address, sk} = algosdk.mnemonicToSecretKey(accounts.data.accounts.addr3.mnemonic);

    const rawSignedTxn = txn.signTxn(sk);

    const tx = (await algodClient.sendRawTransaction(rawSignedTxn).do());

    let assetID = null;
    // wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(algodClient, tx.txId, 4);
    //Get the completed Transaction
    console.log("Transaction " + tx.txId + " confirmed in round " + confirmedTxn["confirmed-round"]);
    assetID = confirmedTxn["asset-index"];
    console.log("AssetID = " + assetID);

    return { assetID };
}


async function createNFT() {
    try {
        const baseServer = process.env.ALGO_API_URL;
        const port = "";

        const token = {
            'X-API-key': process.env.ALGO_API_KEY,
        }
        let algodClient = new algosdk.Algodv2(token, baseServer, port);

        const alice = accounts.data.accounts.addr3;

        // CREATE ASSET
        const { assetID } = await createAsset(algodClient, alice);
    } catch(error) {
        console.log(error);
    }
}

createNFT();
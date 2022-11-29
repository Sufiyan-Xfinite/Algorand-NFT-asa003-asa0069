const algosdk = require('algosdk');
require("dotenv").config();

const baseServer = process.env.ALGO_API_URL;
const port = "";

const token = {
    'X-API-key': process.env.ALGO_API_KEY,
}
let algodClient = new algosdk.Algodv2(token, baseServer, port);


async function getSuggestedParams() {
    const suggestedParms = await algodClient.getTransactionParams().do();
    console.log(suggestedParms);
}
//getSuggestedParams();

module.exports={algodClient, getSuggestedParams}
const algosdk = require('algosdk');


async function generateAccount() {
    const account = await algosdk.generateAccount();

    console.log("Public key : ", account.addr);

    console.log("Secret Key: ", account.sk);
    
    const Mnemonic = await algosdk.secretKeyToMnemonic(account.sk);

    console.log("Mnemonic : ",Mnemonic);
}

generateAccount();
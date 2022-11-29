const fs = require('fs').promises
const crypto = require('crypto');

/**
 * Use to hash image or other content
 * @param {String} path 
 * @param {String} digestType | '' | 'base64'
 */
async function hash(path,digestType,) {
    
    // metadata hash
    const fullPath = __dirname + path;
    console.log("file path is ", fullPath);
    const metadatafile = (await fs.readFile(fullPath));
    const hash = crypto.createHash('sha256');
    hash.update(metadatafile);

    const digestHash = hash.digest(digestType)
    // console.log(digestHash) //dont need this !!

    const metadata = new Uint8Array(digestHash); 

    // console.log("metadata ", metadata);
}
//hash()

module.exports = hash
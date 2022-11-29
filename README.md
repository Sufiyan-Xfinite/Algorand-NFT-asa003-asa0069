# Creating Asset which Implements asa 0003 or asa 0069 Standards
## ASA 0003
### Where to use ?
- It can be used for both fungible and non-fungible tokens
- Stores data outside of blockchain eg: ifs or server
### Other info
- Unit Name (un): no restriction but SHOULD be related to the name in the JSON Metadata file
- Asset Name (an): MUST be
    - SHOULD be equal to the name in the JSON Metadata file.
    - (RECOMMENDED) or <name> where <name> is defined as above. In this case, the Asset URL MUST ends with #arc3
- Asset URL (au): a URI pointing to a JSON Metadata file.
    - If the Asset Name is neither arc3 nor of the form <name>@arc3, then the Asset URL MUST end with #arc3
    - If the Asset URL ends with #arc3, clients MUST remove #arc3 when linking to the URL. When displaying the URL, they MAY display #arc3 in a different style
- Asset Metadata Hash (am)
    - If the JSON Metadata file does not specify the property extra_metadata, then am is defined as the SHA-256 digest of the JSON Metadata file as a 32-byte string
- There are no requirements regarding the manager account of the ASA, or its the reserve account, freeze account, or clawback account.
- JSON Schema - https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md#json-metadata-file-schema
## ASA 0069
### Where to use ?
- Only use for non fungible tokens
- Stores data on chain
### Other info
- Unit Name (un): no restriction.
- Asset Name (an): no restriction.
- Asset URL (au): a URI pointing to digital media file.
    - SHOULD be persistent.
    - SHOULD link to a file small enough to fetch quickly in a gallery view.
    - SHOULD specify media type with # fragment identifier at end of URL. This format MUST follow: #i for images, #v for videos #a for audio, #p for PDF, or #h for HTML/interactive digital media. If unspecified, assume Image.
- OPTIONAL Asset Metadata Hash (am): the SHA-256 digest of the full resolution media file as a 32-byte string
- Freeze Address (f):
    - SHOULD be empty, unless needed for royalties or other use cases
- Clawback Address (c):
    - SHOULD be empty, unless needed for royalties or other use cases
- if immutability is required the manager address MUST be removed.
- JSON Schema : https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md#json-metadata-file-schema
## IPFS 
To store NFT metadata 
- NFT.Storage
    - https://nft.storage/
- Pinata
    - https://app.pinata.cloud/    
# Hello
## ASA 0003
### Where to use ?
- It can be used for both fungible and non-fungible tokens
- Stores data outside of blockchain eg: ifs or server
### Other info

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
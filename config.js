module.exports = {
    // set if domain without port is use as host
  domain: true,
    // Set Host
  host: 'megacryptapp.herokuapp.com',
    // The port megacrypt.js will be running on
  port: process.env.PORT || 3000,
    // Server Decryption Key (change this if hosted)
  serverKey: process.env.DECRYPTION_KEY,
    // if true, the link encryption tool will on the base url
  encryptionTool: true,
    // if true, the link encryption api will be enabled (nedded for the encryption tool)
  encrytionApi: true,
    // if true, the site will return the requested files without decryption them
  returnCiphertext: false
}

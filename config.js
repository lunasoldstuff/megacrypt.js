module.exports = {
    // set if domain without port is use as host
  domain: true,
    // Set Host
  host: 'megacryptapp.herokuapp.com',
    // The port megacrypt.js will be running on
  port: '443',
    // Server Decryption Key (change this if hosted)
  serverKey: "PrkqcWVp@/-,R%2P/kEWC-'PgPMHFFM@>EF4x5J-5]}=-:N%rm${dVLf5@3F]/=2",
    // if true, the link encryption tool will on the base url
  encryptionTool: true,
    // if true, the link encryption api will be enabled (nedded for the encryption tool)
  encrytionApi: true,
    // if true, the site will return the requested files without decryption them
  returnCiphertext: false
}

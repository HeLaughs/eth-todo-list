module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,       
     network_id: "5777",       // Any network (default: none)
    },
},
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
       optimizer: {
         enabled: true,
         runs: 200
       },
      }
    }
  };
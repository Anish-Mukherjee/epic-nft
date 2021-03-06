require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.METAMASK_KEY],
    },
  },
};
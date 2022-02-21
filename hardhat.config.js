require("@nomiclabs/hardhat-waffle");
const fs = require("fs") 
const privateKey = fs.readFileSync("secret").trim().toString()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url:'https://nd-015-799-422.p2pify.com/adbb53bbc89723256c7728af8e77853b',   //Chainstack node endpoint
      accounts: [`0x${privateKey}`]
    }
  }
};

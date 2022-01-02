const Coffee = artifacts.require("Coffee");

module.exports = function (deployer) {
  deployer.deploy(Coffee, 1000000);
};

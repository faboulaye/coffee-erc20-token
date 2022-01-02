const Coffee = artifacts.require("Coffee");

contract("Coffee", (accounts) => {
  before(async () => {
    coffee = await Coffee.deployed();
    console.log("Coffee smart contract address", coffee.address);
  });

  it("gives the owner of the token 1M tokens", async () => {
    let balance = await coffee.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(
      balance,
      1000000,
      "Balance should be equal to 1M for contract creator"
    );
  });

  it("can transfer token between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await coffee.transfer(accounts[1], amount, {
      from: accounts[0],
    });

    let balance = await coffee.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, 1000, "Balance should be equal to 1K tokens");
  });
});

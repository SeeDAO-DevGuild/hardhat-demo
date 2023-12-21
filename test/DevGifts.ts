// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
import { expect } from "chai"
import { ethers } from "hardhat"

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("DevGifts contract", function () {
	async function deployTokenFixture() {
		const [owner, addr1, addr2] = await ethers.getSigners()

		const hardhatToken = await ethers.deployContract("DevGifts")

		// Fixtures can return anything you consider useful for your tests
		return { hardhatToken, owner, addr1, addr2 }
	}

	it("Should assign the total supply of tokens to the owner", async function () {
		const { hardhatToken, owner } = await loadFixture(deployTokenFixture)

		const ownerBalance = await hardhatToken.balanceOf(owner.address)
		expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
	})

	it("Should transfer tokens between accounts", async function () {
		const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
			deployTokenFixture
		)

		const ownerBalance_start = await hardhatToken.balanceOf(owner.address)
		console.log("ownerBalance-start", ownerBalance_start)

		// Transfer 50 tokens from owner to addr1
		await expect(
			hardhatToken.transfer(addr1.address, 50)
		).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50])

		const address1Balance = await hardhatToken.balanceOf(addr1.address)
		console.log("address1Balance", address1Balance)

		// Transfer 50 tokens from addr1 to addr2
		// We use .connect(signer) to send a transaction from another account
		await expect(
			hardhatToken.connect(addr1).transfer(addr2.address, 50)
		).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50])

		// after all transactions done, ownerBalance should be 2950, address1 is 0 and address2 is 50
		const ownerBalance = await hardhatToken.balanceOf(owner.address)
		console.log("ownerBalance-later", ownerBalance)
		const address1Balance_later = await hardhatToken.balanceOf(addr1.address)
		console.log("address1Balance_later", address1Balance_later)
		const address2Balance_later = await hardhatToken.balanceOf(addr2.address)
		console.log("address2Balance_later", address2Balance_later)
	})
})

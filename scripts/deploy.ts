import { ethers } from "hardhat"

async function main() {
	const [deployer] = await ethers.getSigners()

	console.log("Deploying contracts with the account:", deployer.address)

	const devGifts = await ethers.deployContract("DevGifts", [])

	await devGifts.waitForDeployment()

	console.log(`DevGifts deployed to ${devGifts.target}`)
	console.log("DevGifts address:", await devGifts.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})

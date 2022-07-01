const hre = require("hardhat");

async function main() {
    const CoderToken = await hre.ethers.getContractFactory("CoderToken");
    const devToken = await CoderToken.deploy("1024");

    await devToken.deployed();

    console.log("Token deployed to:", devToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
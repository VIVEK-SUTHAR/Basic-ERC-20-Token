const hre = require("hardhat");
async function main() {
    const CoderToken = await hre.ethers.getContractFactory("CoderToken");
    const devToken = await CoderToken.deploy();
    await devToken.deployed();
    console.log("Token deployed to:", devToken.address);
    const mintToken=await devToken.mintToken(900);
    const balaceBeforeTranfer = await devToken.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    console.log("MY BALANCE BEFORE TRANSFER " + parseInt(balaceBeforeTranfer));
    const tra = await devToken.transfer("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", 180);
    const balaceAfterTranfer = await devToken.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    console.log("MY BALANCE AFTER TRANSFER " + parseInt(balaceAfterTranfer));
    const transferedTo = await devToken.balanceOf("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
    console.log("Token balance of 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC : " + parseInt(transferedTo));4
    const mintAnothet=await devToken.mintToken(200);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoderToken is ERC20 {
    uint256 _totalSupply = 1000;
    uint256 _currentSupply = 0;

    constructor() ERC20("CoderToken", "CDTK") {}

    function mintToken(uint256 ammount) public {
        _currentSupply = _currentSupply + ammount;
        require(_currentSupply <= _totalSupply, "toral Supplyt Exceddded");
        _mint(msg.sender, ammount);
        
    }
}

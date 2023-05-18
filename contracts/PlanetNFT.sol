// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// PlanetNFT 는 ERC721 을 상속
contract PlanetNFT is ERC721 {
    // 생성자 == 컨트랙트가 배포 된 최초만 실행
    constructor() ERC721("PlanetNFT", "GBT") { // ERC721 에 Name, Symbole 파라미터 전송
        // 민팅
        for (uint i = 0; i < 10; i ++)
            _safeMint(msg.sender, i + 1); // (to, tokenId)
            

    }
}
// 테스트코드
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Signer } from 'ethers';

// describe == 여러 테스트 코드를 묶어놓은 집합
describe("PlanetNFT", function() {
    
    // 테스트를 위한 지갑 생성
    let owner: Signer;

    // before == 테스트코드가 실행되기 전에 먼저 실행
    before(async () => {
        // 0 번 인덱스에 생성한 owner 지갑 담기
        [owner] = await ethers.getSigners();
    })
    // 테스트코드 영역
    it("should have 10 nfts", async () => {
        // 컨트랙트 빌더 가져오기
        const PlanetNFT = await ethers.getContractFactory('PlanetNFT')
        // 컨트랙트 배포
        const contract = await PlanetNFT.deploy() // 생성자 == constructor 에 파라미터로 아무것도 넘겨주지 않았기에 마찬가지로 공백
        
        // 컨트랙트가 배포될때까지 await
        await contract.deployed()

        // 민팅이 되었는지 확인하는 과정 => 테스트코드 영역
        // balanceOf 를 통해 개수 확인 => 발행된 NFT 개수가 10개가 맞는지 검증
        expect(await contract.balanceOf(await owner.getAddress())).to.be.equal(10) // owner == 지갑의 주소
    })
})
const hre = require("hardhat");

async function main() {
    // 테스트넷에 배포된 주소
  const contractAddress = "0x5dCafA6925a5E731C87d5C57DE30C5b2D15e3fB3";

  // Client 에서 컨트랙트 호출
  const MoneyGifts = new hre.ethers.Contract(
    contractAddress,
    // contractABI,
    );
}
import { useState } from "react";
import Web3 from "web3";

export function ContractCall() {
    const { active, libray } = useWeb3React();
    const [transferContract, setTransferContract] = useState();
    const [transferContractAddr, setTransferContractAddr] = useState("");

    const handleDeployContract = (event) => {
        event.preventDefault();
        if (transferContract) {
            return;
        }
        async function deployTransferContract() {
            const Transfer = new ethers.ContractFactory();
        }
    };
    return (
        <div>
            <button
                disabled={!active || transferContract ? true : false}
                onClick={handleDeployContract}
            ></button>
            <div>
                {" "}
                {transferContractAddr
                    ? transferContractAddr
                    : "Contract not yet deployed"}{" "}
            </div>
        </div>
    );
}

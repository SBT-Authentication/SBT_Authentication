import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const [userAccount, setUserAccount] = useState({
        isConnect: "",
        Account: "",
    });
    let walletConnect = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
            localStorage.setItem("isConnected", accounts);
            setUserAccount({ Account: accounts[0] });
        }
        if (accounts.length === undefined) {
            localStorage.removeItem("isConnected");
            setUserAccount({ Account: "" });
            console.log(accounts);
        }
        navigate("/QRcode");
    };
    const getCurrentWalletConnected = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                });

                if (addressArray.length > 0) {
                    setUserAccount({ Account: addressArray[0] });
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    useEffect(() => {
        if (userAccount.Account !== null) {
            getCurrentWalletConnected();
        }
    }, []);

    function ReaderClick() {
        return navigate("/QRreader");
    }

    return (
        <div>
            <button onClick={walletConnect}>사용자</button>
            <button onClick={ReaderClick}>관리자</button>
        </div>
    );
};
export default Main;

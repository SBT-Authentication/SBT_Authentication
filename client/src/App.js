import React, { useState, useEffect } from "react";

function App() {
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
        }
    };
    const getCurrentWalletConnected = async () => {
        if (window.ethereum) {
            try {
                console.log("aaaaaaaaaaaaaaa");
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

    return <div onClick={walletConnect}>연결</div>;
}

export default App;

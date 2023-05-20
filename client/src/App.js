import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";

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
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                });

                if (addressArray.length > 0) {
                    setUserAccount({ Account: addressArray[0] });
                    console.log(addressArray);
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

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Main
                        currentAccount={userAccount.Account}
                        connectWallet={walletConnect}
                    />
                }
            />
        </Routes>
    );
}

export default App;

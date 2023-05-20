import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import QRcode from "./pages/QRcode";
import QRreader from "./pages/QRreader";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/QRcode"} element={<QRcode />} />
            <Route path={"/QRreader"} element={<QRreader />} />
        </Routes>
    );
}

export default App;

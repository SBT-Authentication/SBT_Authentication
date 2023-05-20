import QR from "qrcode.react";
import { useState } from "react";

const QRcode = () => {
    const [data, setData] = useState();
    //SBT MataData URL
    const url = new URL(
        "https://ipfs.io/ipfs/Qmam1B3wRydD2ERZmDpHg7ZAXRxMENGf4oy19cC1wcVuuu"
    );
    //other URL https://ipfs.io/ipfs/Qmam1B3wRydD2ERZmDpHg7ZAXRxMENGf4oy19cC1wcVuuu

    fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data.age));
    //QR code made by metadata information
    return (
        <div>
            <div>QRcode</div>

            <QR
                value={data}
                size={300}
                id="qr-gen"
                level={"H"}
                includeMargin={false}
            />
        </div>
    );
};

export default QRcode;

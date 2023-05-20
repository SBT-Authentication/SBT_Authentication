import { useState } from "react";
import { useZxing } from "react-zxing";

const Age = (props) => {
    // age determination
    if (2023 - props >= 20 && props !== "") {
        // when you are an adult
        return "인증되었습니다.";
    } else if (2023 - props < 20 && props !== "") {
        // when not an adult
        return "미성년자입니다.";
    } else {
        return "";
    }
};

const QRreader = () => {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });
    //result output
    return (
        <>
            <video ref={ref} />
            <p>
                <span>{Age(result)}</span>
            </p>
        </>
    );
};

export default QRreader;

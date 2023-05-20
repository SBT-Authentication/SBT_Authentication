import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    function Qrclick() {
        return navigate("/QRcode");
    }

    function ReaderClick() {
        return navigate("/QRreader");
    }

    return (
        <div>
            <button onClick={Qrclick}>사용자</button>
            <button onClick={ReaderClick}>관리자</button>
        </div>
    );
};
export default Main;

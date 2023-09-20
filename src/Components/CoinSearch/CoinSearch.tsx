import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";



const CoinSearch: React.FC = () => {
    return (
        <div className="d-flex">
            <h1>구글 검색엔진</h1>
            <script async src="https://cse.google.com/cse.js?cx=54bd1acc72d1b43aa">
            </script>
            <div className="gcse-search"></div>
        </div>
    );
};

export default CoinSearch;

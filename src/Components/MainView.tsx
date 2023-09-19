import { Container, Row } from "react-bootstrap";
import LeftContents from "./TopContents/RightContents";
import RightContents from "./TopContents/RightContents";
import MiddleContents from "./TopContents/MiddleContents";
import CoinCrawling from "./CoinCrawling/CoinCrawling";

const MainView: React.FC = () => {
    return (
        <div>
            <Container>
                <Row>
                    <LeftContents></LeftContents>
                    <MiddleContents></MiddleContents>
                    <RightContents></RightContents>
                </Row>
                <Row>
                    <CoinCrawling></CoinCrawling>
                </Row>
            </Container>
        </div>
    );
};

export default MainView;

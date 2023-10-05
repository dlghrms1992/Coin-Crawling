import { Container, Row } from "react-bootstrap";
import LeftContents from "./TopContents/RightContents";
import RightContents from "./TopContents/RightContents";
import MiddleContents from "./TopContents/MiddleContents";
import CoinCrawling from "./CoinCrawling/CoinCrawling";
import CoinNews from "./CoinNews/CoinNews";
import CoinSearch from "./CoinSearch/CoinSearch";

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
                <>
                    <CoinNews></CoinNews>
                </>

                <Row>
                    <CoinSearch></CoinSearch>
                </Row>
            </Container>
        </div>
    );
};

export default MainView;

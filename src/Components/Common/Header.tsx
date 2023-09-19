import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ButtonGroup, ToggleButton } from 'react-bootstrap';
// import {useState} from "react";
// const [radioValue, setRadioValue] = useState('1');

const Header: React.FC = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <ButtonGroup>
                            {selectExchangeArr.map((exchange, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`exchange-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                    name="radio"
                                    value={exchange.value}
                                    // checked={radioValue === exchange.value}
                                    // onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {exchange.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </Col>
                    <Col xs={6} md={4}>this is Search Or Crawiling</Col>
                    <Col xs={6} md={4}>ETC...</Col>
                </Row>
            </Container>

        </header>
    );
};

export default Header;

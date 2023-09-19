import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, ButtonGroup, Form, Navbar, ToggleButton} from 'react-bootstrap';
import { selectExchangeArr } from '../../constants';
// import {useState} from "react";
// const [radioValue, setRadioValue] = useState('1');

const Header: React.FC = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
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
                        <Col xs={6} md={5}>
                            <Form.Control size="lg" type="text" placeholder="검색어를 입력해주세요!" />
                        </Col>
                        <Col xs="auto" md={1}>
                            <Button variant="primary">검색</Button>
                        </Col>
                        <Col xs={3} md={2}>
                            <Button variant="primary">사용자 정보나 알림?</Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

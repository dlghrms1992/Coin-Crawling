import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, ButtonGroup, Form, ToggleButton} from 'react-bootstrap';
import { selectExchangeArr } from '../../constants';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';

// import {useState} from "react";
// const [radioValue, setRadioValue] = useState('1');

const Header: React.FC = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#">
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
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">

                    <Form >
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-success">로그인</Button>
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-success">알림 </Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;

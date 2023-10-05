import {Accordion, Card, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const CoinPolicy: React.FC = () => {
    return (
        <>
            <div style={{display:'block',
                        width:"100%"}}>
                <h3>코인 정책</h3>
            </div>
            <div className="d-flex">
                <Row xs={1} md={4} className="g-5">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card style={{ width: '18rem' }} className="mb-2" >
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </>
    );
};

export default CoinPolicy;

import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { faqs } from "../constants/faq";

const Faq = () => {
    return (
        <Container>
            <div className="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="container ">
                    <Accordion defaultActiveKey="0">
                        <Row>
                            {faqs.map((faq, i) => (
                                <Col md={6} key={i}>
                                    <Accordion.Item
                                        eventKey={i}
                                        className="mt-1 mx-0 "
                                    >
                                        <Accordion.Header>
                                            {faq.question}
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-body ">
                                            {faq.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                            ))}
                        </Row>
                    </Accordion>
                </div>
            </div>
            {/* </div> */}
        </Container>
    );
};

export default Faq;

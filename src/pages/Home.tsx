import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className='text-center'>
                    <h2>Efficiency Calculator</h2>
                </Col>

                <Col md={4}>
                    <Form>
                        <Form.Group as={Row} controlId='formPlaintextPassword'>
                            <Form.Label column sm='4'>
                                Password
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={{ span: 2, offset: 1 }} className='align-self-center'>
                    <Button block>Click Me !!</Button>
                </Col>
                <Col
                    md={{
                        span: 4,
                        offset: 1
                    }}
                >
                    sağ
                </Col>
            </Row>
        </Container>
    )
}

// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'

export const Home = () => {
    return (
        <Container fluid>
            <Row className='text-center'>
                <Col md={12}>
                    <h2>Efficiency Calculator</h2>
                </Col>
            </Row>
            <hr />
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId='exampleForm.ControlSelect1'>
                            <Form.Control as='select'>
                                <option selected disabled hidden>
                                    Select a plant
                                </option>

                                {PLANT_LIST.map((plant) => {
                                    return (
                                        <option key={plant.name}>
                                            {plant.name}
                                        </option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

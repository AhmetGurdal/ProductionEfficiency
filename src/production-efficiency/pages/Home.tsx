// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'

export const Home = () => {
    const [selectedPlant, setSelectedPlant] = useState<string | null>(null)

    const ahmetFonks = (e: any) => {
        setSelectedPlant(e.target.value)
    }
    return (
        <Container fluid>
            <Row className='text-center'>
                <Col md={12}>
                    <h2>Efficiency Calculator {selectedPlant}</h2>
                </Col>
            </Row>
            <hr />
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId='exampleForm.ControlSelect1'>
                            <Form.Control as='select' onChange={ahmetFonks}>
                                {PLANT_LIST.map((plant) => {
                                    return (
                                        <option
                                            key={plant.name}
                                            value={plant.name}
                                        >
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

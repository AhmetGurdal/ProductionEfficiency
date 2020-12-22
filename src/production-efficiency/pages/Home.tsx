// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'
import { Plant } from 'production-efficiency/models'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Home = () => {
    const [selectedPlantId, setSelectedPlantId] = useState<number>(
        PLANT_LIST[0].id
    )
    const selectedPlant: Plant = PLANT_LIST[selectedPlantId]
    return (
        <Container fluid>
            <Row className='text-center'>
                <Col md={12}>
                    <h2>
                        Efficiency Calculator (
                        {PLANT_LIST[selectedPlantId].name})
                    </h2>
                </Col>
            </Row>
            <hr />
            <Form>
                <Row className='justify-content-center mb-4'>
                    <Col md={6}>
                        <Form.Group controlId='exampleForm.ControlSelect1'>
                            <Form.Control
                                as='select'
                                value={selectedPlantId}
                                onChange={(event) => {
                                    setSelectedPlantId(
                                        parseInt(event.target.value)
                                    )
                                }}
                            >
                                {PLANT_LIST.map((plant) => {
                                    return (
                                        <option key={plant.id} value={plant.id}>
                                            {plant.name}
                                        </option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        {selectedPlant.requirements.minerals.map(
                            (_mineral, index) => {
                                return (
                                    <Row
                                        key={_mineral.name}
                                        className={index === 0 ? '' : 'mt-4'}
                                    >
                                        <Col md={6}>
                                            {_mineral.name} ({_mineral.unit})
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control
                                                type='number'
                                                defaultValue={_mineral.avg}
                                            />
                                        </Col>
                                    </Row>
                                )
                            }
                        )}
                    </Col>
                    <Col md={4}>
                        <Button variant='primary' block>
                            Calculate
                        </Button>
                    </Col>
                    <Col md={5} className='text-center'>
                        <h2>95%</h2>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

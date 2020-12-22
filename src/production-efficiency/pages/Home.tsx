// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'
import { Plant, Requirements } from 'production-efficiency/models'

export const Home = () => {
    const INITIAL_PLANT = PLANT_LIST[0]

    // states
    const [selectedPlantId, setSelectedPlantId] = useState<number>(
        INITIAL_PLANT.id
    )

    // constants
    const selectedPlant: Plant = PLANT_LIST[selectedPlantId]

    // events
    const plantTypeSelectEvent = (event: React.ChangeEvent<any>) => {
        setSelectedPlantId(parseInt(event.target.value))
        // ...
    }

    // ui render methods
    const renderPlantTypeSelectOption = (plant: Plant) => (
        <option key={plant.id} value={plant.id}>
            {plant.name}
        </option>
    )

    const renderMineralRequirementField = (mineral: Requirements) => (
        <Row key={mineral.name}>
            <Col md={6}>
                {mineral.name} ({mineral.unit})
            </Col>
            <Col md={6}>
                <Form.Control type='number' defaultValue={mineral.avg} />
            </Col>
        </Row>
    )

    return (
        <Container fluid>
            <Row className='text-center'>
                <Col md={12}>
                    <h2>Efficiency Calculator ({selectedPlant.name})</h2>
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
                                onChange={plantTypeSelectEvent}
                            >
                                {PLANT_LIST.map(renderPlantTypeSelectOption)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        {selectedPlant.requirements.minerals.map(
                            renderMineralRequirementField
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

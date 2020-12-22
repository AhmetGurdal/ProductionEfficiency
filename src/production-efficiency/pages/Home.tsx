// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'
import { Plant, Requirements } from 'production-efficiency/models'

export const Home = () => {
    const INITIAL_PLANT = PLANT_LIST[0]
    const REQUIREMENT_FIELD = 'requirement-field'

    // states
    const [selectedPlantId, setSelectedPlantId] = useState<number>(
        INITIAL_PLANT.id
    )

    const [formFields, setFormFields] = useState<Record<string, string>>({})

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

    const handleInputChange = (
        index: string,
        event: React.ChangeEvent<any>
    ) => {
        const values = formFields
        values[index] = event.target.value

        console.log(values)
        setFormFields(values)
    }

    const renderRequirementField = (requirement: Requirements) => (
        <Row key={requirement.name}>
            <Col md={6}>
                {requirement.name} ({requirement.unit})
            </Col>
            <Col md={6}>
                <Form.Control
                    className={REQUIREMENT_FIELD}
                    name={requirement.name}
                    type='text'
                    onChange={(event) =>
                        handleInputChange(requirement.name, event)
                    }
                />
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
                            renderRequirementField
                        )}
                    </Col>

                    <Col md={5} className='text-center'>
                        <h2>95%</h2>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

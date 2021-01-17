// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { PLANT_LIST } from 'production-efficiency/constants/'
import { Plant, Requirements } from 'production-efficiency/models'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Home = () => {
    const INITIAL_PLANT = PLANT_LIST[0]
    const REQUIREMENT_FIELD = 'requirement-field'

    // states
    const [selectedPlantId, setSelectedPlantId] = useState<number>(
        INITIAL_PLANT.id
    )
    const [formFields, setFormFields] = useState<Record<string, string>>({})
    const [efficiency, setEfficiency] = useState<number>(0)

    // constants
    const selectedPlant: Plant = PLANT_LIST[selectedPlantId]

    // events
    const plantTypeSelectEvent = (event: React.ChangeEvent<any>) => {
        setSelectedPlantId(parseInt(event.target.value))

        // reset form values and states
        setEfficiency(0)
        setFormFields({})

        Array.from(document.querySelectorAll('input')).forEach(
            (input) => (input.value = '')
        )
    }

    // ui render methods
    const renderPlantTypeSelectOption = (plant: Plant) => (
        <option key={plant.id} value={plant.id}>
            {plant.name}
        </option>
    )

    const magicFunc = () => {
        let tempEfficieny = 0
        let sufficient = true
        let counter = 0

        Object.keys(formFields).forEach((key) => {
            const value: number = parseFloat(formFields[key])

            const temp: any = selectedPlant.requirements.minerals.filter(
                (x) => x.name === key
            )[0]
            if (!isNaN(value)) {
                if (value > temp.max) {
                    sufficient = false
                } else if (value >= temp.avg) {
                    tempEfficieny += (-1 / -value) * (100 * temp.avg)
                } else {
                    tempEfficieny +=
                        (value - temp.min) * (100 / (temp.avg - temp.min))
                    if (tempEfficieny <= 0) {
                        sufficient = false
                    }
                }
                counter += 1
            }
        })
        tempEfficieny = Math.round(tempEfficieny)
        if (!sufficient) {
            tempEfficieny = 0.000000000001
        }

        setEfficiency(tempEfficieny / counter)
    }

    const handleInputChange = (
        index: string,
        event: React.ChangeEvent<any>
    ) => {
        const values = formFields
        values[index] = event.target.value
        setFormFields(values)
        magicFunc()
    }

    const renderRequirementField = (requirement: Requirements) => (
        <Row key={requirement.name} className='justify-content-center m-1'>
            <Col md={2}>{requirement.name}</Col>
            <Col md={10}>
                <Form.Control
                    className={REQUIREMENT_FIELD}
                    name={requirement.name}
                    placeholder={requirement.unit}
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
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Form.Group
                            controlId='exampleForm.ControlSelect1'
                            className='m-2'
                        >
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

                <Row md={5} className='text-center justify-content-center'>
                    {efficiency ? <h1>{efficiency} %</h1> : null}
                </Row>

                <Row>
                    <Col md={12}>
                        {selectedPlant.requirements.minerals.map(
                            renderRequirementField
                        )}
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

// eslint-disable-next-line no-use-before-define
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const About = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const x = 2
    const y = 2
    return (
        <div>
            <h2>About Page</h2>
            <hr />
            Result1: <span>{x}</span>
            <hr />
            Result2: <span>{y}</span>
            <hr />
            <Form
                ref={formRef}
                onSubmit={(event) => {
                    event.preventDefault()
                    // const formData = new FormData(event.target),
                    // formDataObj = Object.fromEntries(formData.entries())
                    // console.log(formDataObj)
                    // // console.log(event.target)

                    const collection = formRef.current?.getElementsByClassName(
                        'input'
                    )

                    collection &&
                        Array.from(collection).forEach((element) => {
                            // console.log(element)
                            console.log(element.getAttribute('name'), element.getAttribute('value'))
                        })
                }}
            >
                <Form.Group>
                    <Form.Control
                        name='x'
                        type='number'
                        className='input'
                        defaultValue={x}
                    />
                    <Form.Control
                        name='y'
                        type='number'
                        className='input'
                        defaultValue={y}
                    />
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

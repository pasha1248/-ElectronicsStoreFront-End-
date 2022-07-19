/** @format */

import React from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
  const { device } = React.useContext(Context)

  const [info, setInfo] = React.useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const removeInfo = elment => {
    setInfo(info.filter(i => i.number !== elment))
  }

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-3 mb-2'>
            <Dropdown.Toggle>choose to type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3 mb-2'>
            <Dropdown.Toggle>choose to brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className='mt-3'
            placeholder='Write name a new device'
          />
          <Form.Control className='mt-3' placeholder='Price' type='number' />

          <Form.Control className='mt-3' placeholder='Photo' type='file' />
          <hr />
          <Button onClick={addInfo} variant={'outline-dark'}>
            Add new options
          </Button>
          {info.map(i => (
            <Row key={i.number} className='mt-4'>
              <Col md={4}>
                <Form.Control placeholder='write name' />
              </Col>
              <Col md={4}>
                <Form.Control placeholder='write description' />
              </Col>
              <Col md={4}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Close
        </Button>
        <Button variant='outline-success' onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice

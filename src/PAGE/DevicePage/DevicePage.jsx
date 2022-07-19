/** @format */

import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Context } from '../../App'
import { AiOutlineStar } from 'react-icons/ai'
import poto from '../../assets/star.png'

const DevicePage = () => {
  // const { device } = React.useContext(Context)
  const description = [
    { id: 1, title: 'memory', description: '5gb' },
    { id: 2, title: 'camera', description: '12mb' },
    { id: 3, title: 'core', description: 'core i-3' },
    { id: 4, title: 'batary', description: '2000m' },
    { id: 5, title: 'memory', description: '5gb' },
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} />
        </Col>

        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>lll</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${poto}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 40,
              }}
            >
              ppp
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Card
            className='d-flex flex-culumn align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>$ 23</h3>
            <Button variant={'outline-dark'}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Description</h1>
        {description.map(info => (
          <Row
            key={info.id}
            style={{
              background: info.id % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage

/** @format */

import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../../../utils/consts'

const DeviceItem = ({ device }) => {
  const navigate = useNavigate()
  return (
    <Col
      md={3}
      className='mt-3'
      onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className='text-black-50 m-1 d-flex justify-content-between'>
          <div>Samsung...</div>
          <div>
            <div>{device.rating}*</div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem

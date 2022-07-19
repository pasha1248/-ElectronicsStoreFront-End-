/** @format */

import React from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../../COMPONENTS/models/CreateBrand'
import CreateDevice from '../../COMPONENTS/models/CreateDevice'
import CreateType from '../../COMPONENTS/models/CreateType'

const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false)
  const [typeVisible, setTypeVisible] = React.useState(false)
  const [deviceVisible, setDeviceVisible] = React.useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button
        onClick={() => setTypeVisible(true)}
        variant={'outline-dark'}
        className='mt-4 p-2'
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={'outline-dark'}
        className='mt-4 p-2'
      >
        Add brand
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={'outline-dark'}
        className='mt-4 p-2'
      >
        Add device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  )
}

export default Admin

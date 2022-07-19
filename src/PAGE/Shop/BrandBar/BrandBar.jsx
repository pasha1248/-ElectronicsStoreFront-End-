/** @format */

import style from './BrandBar.module.scss'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../../..'

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className={style.brand}>
      {device.brands.map(brand => (
        <Card
          key={brand.id}
          className='p-3'
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'blue' : 'light'}
          style={{ cursor: 'pointer' }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar

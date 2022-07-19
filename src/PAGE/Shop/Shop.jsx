/** @format */

import React, { useContext, useEffect } from 'react'
import TypeBar from './TypeBar/TypeBar'
import style from './Shop.module.scss'
import BrandBar from './BrandBar/BrandBar'
import DeviceList from './DeviceList/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { fetchTypes } from '../../http/deviecAPI'

const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
  }, [])
  return (
    <div className={style.container}>
      <div>
        <TypeBar />
      </div>
      <div>
        <BrandBar />
        <DeviceList />
      </div>
    </div>
  )
})

export default Shop

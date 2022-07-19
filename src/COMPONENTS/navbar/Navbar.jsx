/** @format */

import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import style from './Navbar.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Context } from '../..'

const Navbar = observer(() => {
  const { user } = React.useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setIsUser({})
    user.setIsAuth(false)
  }
  console.log(user.isAuth)

  return (
    <div className={style.nav}>
      <div className={style.home}>
        <ul>
          <Link to={SHOP_ROUTE}>
            <li>Store</li>
          </Link>
          <Link to=''>
            <li>Home</li>
          </Link>
          <Link to=''>
            <li>Features</li>
          </Link>
          <Link to=''>
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      {user.isAuth ? (
        <div className={style.input}>
          <Button
            style={{ marginRight: '30px' }}
            onClick={() => navigate(ADMIN_ROUTE)}
          >
            Admin
          </Button>
          <Button onClick={() => logOut()}>Go out</Button>
        </div>
      ) : (
        <div className={style.input}>
          <Button onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
        </div>
      )}
    </div>
  )
})

export default Navbar

/** @format */

import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { login, registration } from '../../http/userApi'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import style from './Auth.module.scss'

const Auth = observer(() => {
  const { user } = React.useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  //
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //
  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setIsUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (error) {
      console.log(error.response.data.message)
      alert('Failed')
    }
  }

  return (
    <div className={style.format}>
      <form>
        <h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='text'
            placeholder='Login'
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='password'
          />
          <div className={style.regis}>
            {isLogin ? (
              <Link to={REGISTRATION_ROUTE}>Registration ? </Link>
            ) : (
              <Link to={LOGIN_ROUTE}>Login ? </Link>
            )}

            <Button onClick={click}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
})

export default Auth

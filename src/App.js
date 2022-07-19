/** @format */

import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { Context } from '.'
import AppRouter from './COMPONENTS/AppRouter'
import Navbar from './COMPONENTS/navbar/Navbar'
import { check } from './http/userApi'

const App = observer(() => {
  const { user } = React.useContext(Context)

  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <div className='App'>
      <Navbar />
      <AppRouter />
      {/* <Auth /> */}
    </div>
  )
})

export default App

import React, { useContext } from 'react'
import { Context } from '../Context'

export default () => {

  const { removeAuth } = useContext(Context)

  return (
    <div>
        <h2>Profile</h2>
        <button onClick={removeAuth}>Log out</button>
    </div>
    )
  }

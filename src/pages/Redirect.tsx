import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import { getParamValues } from '../utils/functions'
interface RedirectProps {}

const Redirect = (props: RedirectProps) => {
  const history = useHistory()
  useEffect(() => {
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/')
      }
      const access_token = getParamValues(location.hash)
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000
      localStorage.setItem('params', JSON.stringify(access_token))
      localStorage.setItem('expiry_time', expiryTime.toString())
      history.push('/')
    } catch (error) {
      history.push('/auth')
    }
  })

  return <div></div>
}
export default Redirect

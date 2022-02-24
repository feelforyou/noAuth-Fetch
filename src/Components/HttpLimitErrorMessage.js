import React from 'react'
import Countdown from './Countdown'

const HttpLimitErrorMessage = () => {
  return (
    <div className='HttpError-message'>
      You have hit the limit of http (10req/min) requests, please wait <Countdown /> sec to search again.
    </div>
  )
}

export default HttpLimitErrorMessage
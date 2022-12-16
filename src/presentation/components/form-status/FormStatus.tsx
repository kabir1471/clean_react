import React from 'react'
import Spinner from '../spinner/Spinner'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  return (
<div className={Styles.errorWrap}>
        <span className={Styles.error}>Error</span>
        <Spinner className={Styles.spinner} />
      </div>
  )
}

export default FormStatus

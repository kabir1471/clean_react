import React, { memo } from 'react'
import Logo from '../logo/Logo'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
  <header className={Styles.header}>
      <Logo />
      <h1>Dev - Adv course for prog</h1>
    </header>
  )
}

export default memo(LoginHeader)

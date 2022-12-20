import { Router } from '../presentation/components'
import React from 'react'
import ReactDom from 'react-dom/client'
import { MakeLogin } from './factories/pages/login/login-factory'

const root = ReactDom.createRoot(document.getElementById('main') as HTMLElement)

root.render(<Router MakeLogin={MakeLogin} />)

import React from 'react'
import ReactDom from 'react-dom/client'
import Login from '../presentation/pages/login'

const root = ReactDom.createRoot(document.getElementById('main') as HTMLElement)

root.render(<Login />)

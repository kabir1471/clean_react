import { Router } from '../presentation/components'
import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('main') as HTMLElement)

root.render(<Router />)

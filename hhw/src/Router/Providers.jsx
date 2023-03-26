import { AuthProvider } from '../context/AuthProvider'
import React from 'react'
import Router from './Router'

const Providers = () => {
  return (
    <AuthProvider>
       <Router />
    </AuthProvider>
  )
}

export default Providers
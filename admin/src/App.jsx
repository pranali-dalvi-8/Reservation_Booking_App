import React from 'react'

import AdminTable from './Components/AdminTable'
import {ToastContainer, toast} from 'react-toastify'

export const backendUrl = "http://localhost:4000"


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <AdminTable/>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import DeleteBooks from './pages/DeleteBooks'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
  )
}

export default App
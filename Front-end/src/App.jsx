import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import ShowBook from './Pages/ShowBook'
import EditBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={ <ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/boks/delete/:id' element={<DeleteBook />} />
    </Routes>

  )
}

export default App
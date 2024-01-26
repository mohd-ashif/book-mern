import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import ShowBook from './Pages/ShowBook'
import EditBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'
import { ErrorBoundary } from 'react-error-boundary';



const App = () => {

  const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );

  return (
    <Router>
       <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={ <ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    </ErrorBoundary>
    </Router>

  )
}

export default App
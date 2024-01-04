import React , {useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const CreateBooks = () => {

  const [ title , setTitle] =useState('');
  const [ author, setAuthor] = useState('')
  const [ publishYear, setPublishYear] = useState('')
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSaveBook =() => {

    const data = {
      title, 
      author, 
      publishYear
    };

    axios.post('http://localhost:3000/books', data)
    .then(() => {
      setLoading(false)
    navigate('/')

    })
    .catch((error) => {
      setLoading(false);
      alert("An error Happend .please check console")
      console.log(error)
    })


  }

  return (
    <div className='p-4'>
      <BackButton />

      <h1 className='text-3xl my-4 ' >Create Book</h1>
      { loading ?  <Spinner /> : ''}
      <div className="flex flex-col border-2 border-x-blue border-y-blue  rounded-xl w-[600px] p-4 mx-auto ">
        <div className="my-4">
          <label className='text-xl mr-4 text-gray '> Title </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
            className='border-2 border-gray px-4 py-2 w-full' />
          
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray '> Author </label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} 
            className='border-2 border-gray px-4 py-2 w-full' />
          
        </div>

        <div className="my-4">
          <label className='text-xl mr-4 text-gray '>Publish Year </label>
            <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} 
            className='border-2 border-gray px-4 py-2 w-full' />
         
        </div>

   <button className='p-2  bg-blue m- ' onClick={handleSaveBook} >Save</button>
      </div>
    </div>
  )
}

export default CreateBooks
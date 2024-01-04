import React , {useState , useEffect} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate  , useParams} from 'react-router-dom'

const EditBook = () => {

  const [ title , setTitle] =useState('');
  const [ author, setAuthor] = useState('')
  const [ publishYear, setPublishYear] = useState('')
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} =useParams()

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear); 
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An Error happened. Please check the console.");
        console.log(error);
      });
  }, [id]); 
  

  const handleEditBook =() => {

    const data = {
      title, 
      author, 
      publishYear
    };

    axios.put(`http://localhost:3000/books/${id}`, data)
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

      <h1 className='text-3xl my-4 ' >Edit book Book</h1>
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

   <button className='p-2  bg-blue m- ' onClick={handleEditBook} >Save</button>
      </div>
    </div>
  )
}

export default EditBook
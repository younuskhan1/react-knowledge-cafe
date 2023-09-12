
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BooksMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);

  const handleAddedBookMarks = (blog) => {
    console.log('I have added the bookmark to this blog')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto gap-10'>
        <Blogs handleAddedBookMarks={handleAddedBookMarks}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App

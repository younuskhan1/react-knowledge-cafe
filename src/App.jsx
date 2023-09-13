
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BooksMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadigTime] = useState(0)

  const handleAddedBookMarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookMarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadigTime(newReadingTime);
    const remainigBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainigBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto gap-10'>
        <Blogs handleAddedBookMarks={handleAddedBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App

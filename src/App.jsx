import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { getBlogsFromLocalStorage, setBlogsInLocalStorage } from './utilities/bookmark'

function App() {
  const[bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const[spentTime, setSpentTime] = useState(0);

  useEffect(()=>{
    const bookmarked = getBlogsFromLocalStorage();
    setBookmarkedBlogs(bookmarked);
  }, [])

  const handleBookmark = title => {
    //set in bookmarks
    const bookmarked = getBlogsFromLocalStorage();
    bookmarked.push(title);
    setBookmarkedBlogs(bookmarked);
    
    //set in local storage
    setBlogsInLocalStorage(title); 
  }

  const handleSpentTime = readTime => {
    setSpentTime(spentTime + readTime);
  }

  const handleRead = title => {
    const remaining = bookmarkedBlogs.filter(blogTitle => blogTitle !== title);
    setBookmarkedBlogs(remaining);
    localStorage.setItem('bookmarkedBlogs', JSON.stringify(remaining));
  }

  return (
    <>
        <Header></Header>
        <div className='md:grid md:grid-cols-3 md:gap-4 py-4 mx-4'>
          <Blogs handleBookmark={handleBookmark} handleSpentTime={handleSpentTime}  handleRead={handleRead}></Blogs>
          <Bookmarks bookmarkedBlogs={bookmarkedBlogs} spentTime={spentTime}></Bookmarks>
        </div>
    </>
  )
}

export default App

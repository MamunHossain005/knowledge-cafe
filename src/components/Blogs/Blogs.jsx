import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleSpentTime, handleRead}) => {
    const[blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Blogs: {blogs.length}</h2>
            {blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookmark={handleBookmark} handleSpentTime={handleSpentTime} handleRead={handleRead}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired,
}

export default Blogs;
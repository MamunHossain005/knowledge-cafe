import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleBookmark, handleSpentTime, handleRead}) => {
    const{title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='border-b-2 mb-10'>
            <img src={cover} alt={`cover picture of the title ${title}`} className='rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6 mt-8'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='font-semibold text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='font-semibold text-gray-400'>{reading_time} min read</p>
                    <button className='text-gray-400' title='Bookmark' onClick={() => handleBookmark(title)}><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold my-4">{title}</h2>
            <div className='mb-2'>
                {hashtags.map((hashtag, idx) => <span key={idx} className='ml-2'>{hashtag}</span>)}
            </div>
            <button className='underline mb-4 text-blue-700 font-medium' 
            onClick={()=>{handleSpentTime(reading_time); handleRead(title)}}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired,
}

export default Blog;
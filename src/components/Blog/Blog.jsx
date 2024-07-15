import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} className='rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6 mt-8'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='font-semibold text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='font-semibold text-gray-400'>{reading_time} min read</span>
                    <button></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold my-4">{title}</h2>
            <div className='mb-7'>
                {hashtags.map((hashtag, idx) => <span key={idx} className='ml-2'>{hashtag}</span>)}
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;
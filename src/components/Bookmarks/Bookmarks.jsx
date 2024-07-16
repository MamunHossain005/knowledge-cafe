import PropTypes from 'prop-types';

const Bookmarks = ({bookmarkedBlogs}) => {
    return (
        <div className='bg-gray-100 px-5 py-3 rounded-lg h-fit'>
            <h2 className="text-2xl font-semibold mb-4">Bookmarked Blogs: {bookmarkedBlogs.length}</h2>
            {bookmarkedBlogs.map((blog, idx) => <p key={idx} className='bg-white mb-3 p-6 rounded-lg font-semibold text-gray-700'>{blog}</p>)}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarkedBlogs: PropTypes.array.isRequired,
}

export default Bookmarks;
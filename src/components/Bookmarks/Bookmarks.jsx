import PropTypes from 'prop-types';

const Bookmarks = ({bookmarkedBlogs, spentTime}) => {
    return (
        <div>
            <div className='bg-blue-50 p-5 mb-3 rounded-lg border-2 border-blue-400'>
                <p className='text-blue-700 font-bold text-lg text-center'>Spent time on read : {spentTime} min</p>
            </div>
            <div className='bg-gray-100 px-5 py-3 rounded-lg h-fit'>
                <h2 className="text-2xl font-semibold mb-4">Bookmarked Blogs: {bookmarkedBlogs.length}</h2>
                {bookmarkedBlogs.map((blog, idx) => <p key={idx} className='bg-white mb-3 p-6 rounded-lg font-semibold text-gray-700'>{blog}</p>)}
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarkedBlogs: PropTypes.array.isRequired,
    spentTime: PropTypes.number.isRequired,
}

export default Bookmarks;
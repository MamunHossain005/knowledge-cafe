const getBlogsFromLocalStorage = () => {
    const blogsString = localStorage.getItem('bookmarkedBlogs');
    if(blogsString){
        return JSON.parse(blogsString);
    }
    return [];
}

const setBlogsInLocalStorage = blog => {
    const bookmarkedBlogs = getBlogsFromLocalStorage();
    bookmarkedBlogs.push(blog);
    localStorage.setItem('bookmarkedBlogs', JSON.stringify(bookmarkedBlogs));
}

export {getBlogsFromLocalStorage, setBlogsInLocalStorage};
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddedBookMarks, handleMarkAsRead }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-12'>
            <img className='w-full mb-8' src={cover} alt={`name of the cover picture is ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div className='pl-3'>
                        <h1 className='text-xl'>{author}</h1>
                        <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                    <button onClick={() => handleAddedBookMarks(blog)}>
                        <i className="fa-regular fa-bookmark ml-3 text-red-600"></i></button>
                </div>
            </div>
            <h3 className="text-3xl mb-2">{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 underline mt-3 font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddedBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}
export default Blog;
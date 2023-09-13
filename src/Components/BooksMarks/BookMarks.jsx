import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 p-2">
            <h3 className='text-3xl'> Reading Time: {readingTime}</h3>
            <h1 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id}
                        bookmark={bookmark}>
                    </Bookmark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default BookMarks;
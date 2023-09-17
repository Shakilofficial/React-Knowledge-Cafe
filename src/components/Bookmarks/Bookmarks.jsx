import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
      <div className="md:w-1/3 px-4 mt-4 space-y-4">
          <div className="bg-purple-100/90 p-3 rounded-lg border-2 border-purple-600">
              <h3 className="text-xl text-center font-bold text-purple-700">Spent time on read : {readingTime} Minutes</h3>
          </div>
      <div className="py-4 px-4 rounded-lg  bg-[#1111110d]">
        <h3 className="mb-4 mt-1 text-xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}{" "}
        </h3>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;

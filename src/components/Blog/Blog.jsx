import PropTypes from 'prop-types';
import { BiBookmark } from "react-icons/bi";

const Blog = ({ blog, handleBookmark,handleMarkAsRead }) => {
    const { title, cover,reading_time,author,posted_date, author_img,hashtags } = blog;
    return (
        <div className='mb-16 space-y-4 px-2'>
            <img className='rounded-lg w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='my-4 flex justify-between items-center'>
                <div className='flex space-x-2' >
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author} </h3>
                        <p className='text-[#11111199] font-semibold'>{posted_date} </p>
                    </div>
                </div>
                <div className='px-4 flex justify-center'>
                    <span className='text-[#11111199] font-semibold'>{reading_time} min read</span>
                    <button onClick={() => handleBookmark(blog)} className='text-purple-900 ml-2 text-2xl'> <BiBookmark></BiBookmark> </button>
                </div>
            </div>
            <h2 className='px-1 text-4xl font-bold'>{title} </h2>
            <p className='px-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=""> # {hash}</a> </span> )
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='px-1 underline underline-offset-2 text-lg font-semibold text-purple-800' >Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;
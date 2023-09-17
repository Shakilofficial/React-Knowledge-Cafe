import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-white rounded-lg p-1 mb-4'>
            <h3 className='text-lg p-3 font-semibold'>{title} </h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;
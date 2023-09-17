import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex px-2 justify-between max-w-7xl mt-4 items-center mx-auto pb-4 border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
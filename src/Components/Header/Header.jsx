import image from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center mx-10 my-5 border-b-2 pb-4'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={image} alt="" />
        </header>
    );
};

export default Header;
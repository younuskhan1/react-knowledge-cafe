import image from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center 
        p-4 border-b-2 pb-4 max-w-5xl mx-auto'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={image} alt="" />
        </header>
    );
};

export default Header;
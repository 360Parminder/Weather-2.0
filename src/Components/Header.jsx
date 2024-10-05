import logo from '../Assets/Images/logo.png'

const Header = () => {
    return (
        <div className="w-full h-20 text-white flex justify-between items-center px-5">
           <image src={logo} alt="logo" className="w-auto h-10 mr-5" />
            <div className='flex'>
                <input className='bg-gray-200 w-full h-10 px-5 rounded-lg' type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
            <div>
                <button>My location</button>
            </div>
        </div>
    )
}   

export default Header
import logo from '../assets/Image/logo.png'
import { BsBoxArrowRight } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


function HeaderGenaral() {



    return (
        <>
            <nav className="bg-white p-4 drop-shadow-md ">
{ /* ---- Logo & logo text ---- */}
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold ">
                        <a className='md:flex space-x-2' href="/">
                            <img className='size-8' src={logo} />
                            <span className='text-amber-800 text-xl'>eBook Store</span>
                        </a>
                    </div>
{ /* ---- Search bar & search button ---- */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <button className='flex items-center space-x-4 rounded hover:rounded bg-green-300 hover:bg-green-600 text-black font-semibold py-2 px-6 shadow-md'>
                            <BsSearch />
                            Search
                        </button>
                    </div>
{ /* ---- Login & sign up buttons ---- */}
                    <div className='hidden md:flex space-x-2'>
                        <button className='flex items-center space-x-4 rounded hover:rounded bg-blue-500 hover:bg-blue-700 text-black font-semibold py-2 px-6 shadow-md'>
                            <BsBoxArrowRight />
                            Login</button>
                        <button className='flex items-center space-x-4 rounded hover:rounded bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-6 shadow-md'>
                            <BsFillPersonPlusFill />
                            Sign up</button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default HeaderGenaral
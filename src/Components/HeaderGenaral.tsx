import logo from '../assets/Image/logo.png'
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function HeaderGenaral() {
    const navigate = useNavigate();



    return (
        <>
            <nav className="bg-white p-2 drop-shadow-md ">
                { /* ---- Logo & logo text ---- */}
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold ">
                        <a className='md:flex space-x-3' href="/">
                            <img className='size-8' src={logo} />
                            <span className='text-amber-800 text-xl'>eBook Store</span>
                        </a>
                    </div>
                    { /* ---- Search bar & search button ---- */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            id='search text'
                            placeholder="Search Book..."
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <button className='flex items-center space-x-2 rounded hover:rounded border-2 bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-6 '>
                            <BsSearch />
                            <span>
                                Search
                            </span>
                        </button>
                    </div>
                    { /* ---- Login & sign up buttons ---- */}
                    <div className='flex space-x-2'>
                        <button onClick={()=> navigate("/login")} className='flex items-center space-x-2 rounded hover:rounded border-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6'>
                            <BsBoxArrowInRight />
                            <span>
                                Login
                            </span>
                        </button>
                        <button onClick={()=> navigate("/signup")} className='flex items-center space-x-2 rounded hover:rounded border-2 bg-yellow-400 hover:bg-yellow-300 text-white font-semibold py-2 px-6'>
                            <BsFillPersonPlusFill />
                            <span>
                                Sign up
                            </span>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default HeaderGenaral
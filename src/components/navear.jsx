import avatar from '../assets/profile.png';
function Navbar() {
    return (
        <div className="w-full bg-white">
            <nav className="">
                <div className="flex justify-between items-center p-4">
                    <ul className="flex space-x-4">
                        <li className="font-bold text-amber-400 underline">Order</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>Drivers</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>Shippers</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>Users</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>companies</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>metrics</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>Group</li>
                        <li className=' hover:text-amber-400 cursor-pointer'>Documents</li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <div className=" relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                            </svg>
                            <div className="w-3 h-3 bg-amber-400 rounded-full border-2 border-white absolute right-0 top-0"> </div>
                        </div>
                        <div className='flex items-center space-x-2 p-1'>
                            <img src={avatar} className='h-8 w-8 ' alt="" />
                            <div>
                                <p className="text-xs font-semibold ">John Doe</p>
                                <p className="text-xs text-gray-400">john@doe.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
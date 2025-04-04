import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location.pathname]);

    const navItems = [
        { name: 'Order', path: '/' },
        { name: 'Drivers', path: '/drivers' },
        { name: 'Shippers', path: '/shippers' },
        { name: 'Users', path: '/users' },
        { name: 'Companies', path: '/companies' },
        { name: 'Metrics', path: '/metrics' },
        { name: 'Group', path: '/group' },
        { name: 'Documents', path: '/documents' }
    ];

    return (
        <div className="w-full bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Navigation Items */}
                    <ul className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link to={item.path}  
                                key={item.path} 
                                className={`cursor-pointer hover:!underline text-sm md:text-base ${activePage === item.path ? '!font-bold !text-amber-400 !underline' : 'hover:!text-amber-400'}`}
                                style={{color: "gray" ,}}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 6.75a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75ZM4.5 12a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75ZM4.5 17.25a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                            </svg>
                            <div className="w-3 h-3 bg-amber-400 rounded-full border-2 border-white absolute right-0 top-0"> </div>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <img src={avatar} className="h-8 w-8 rounded-full" alt="User Avatar" />
                            <div>
                                <p className="text-xs font-semibold">John Doe</p>
                                <p className="text-xs text-gray-400">john@doe.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null); // Ref to the menu container

    const routes = [
        { path: "/", name: "Home", id: "1" },
        { path: "/campaigns", name: "All Campaigns", id: "2" },
        { path: "/campaign/new", name: "Add Campaign", id: "3" },
        { path: "/campaign/my", name: "My Campaigns", id: "4" },
        { path: "/donations/my", name: "My Donations", id: "5" },
    ];

    // Close menu 
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [open]);

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center bg-purple-500 py-6 px-6 rounded-t-xl border-x-2 border-dashed border-yellow-200">
                {/* Website Logo */}
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                    PullUp
                </h1>

                {/* Navigation Menu */}
                <ul
                    ref={menuRef}
                    className={`flex flex-col lg:flex-row lg:items-center lg:justify-center absolute z-10 lg:relative right-0 top-20 lg:top-0 bg-white lg:bg-transparent text-black lg:text-white px-5 py-5 lg:px-0 lg:py-0 rounded-lg gap-y-6 lg:gap-x-8 transition-all duration-300 ${
                        open ? "block" : "hidden lg:flex"
                    }`}
                >
                    {routes.map((route) => (
                        <li key={route.id}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-3 py-2 rounded-xl font-extrabold bg-purple-600 text-white border-2 border-black text-base md:text-sm lg:text-lg"
                                        : "hover:text-purple-300 border-2 border-purple-400 p-2 rounded-lg z-10"
                                }
                                onClick={() => setOpen(false)} // Close menu on link click
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Menu Icons and Login Button */}
                <div className="flex gap-4 items-center">
                    <Link
                        to="/logIn"
                        className="hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-200 font-bold"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className="hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-200 font-bold"
                    >
                        Register
                    </Link>

                    {/* Hamburger Menu */}
                    <div
                        className="lg:hidden hover:text-purple-300 border-2 border-purple-400 py-2 px-4 rounded-lg bg-gray-300"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <IoClose className="bg-white text-black text-3xl rounded-full p-1" />
                        ) : (
                            <IoMenu className="bg-white text-black text-3xl rounded-full p-1" />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

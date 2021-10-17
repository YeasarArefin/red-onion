import React, { useEffect, useState } from 'react';
import logo from '../assets/logo2.png';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { useOrder } from '../context/OrderProvider';

const Nav = () => {

    const { user, logOut } = useFirebase();
    const [show, setShow] = useState(true);

    const { meal } = useOrder();

    const showNav = () => {

        if (window.scrollY > 150) {
            setShow(false);
        } else {
            setShow(true);
        }

    };

    useEffect(() => {

        window.addEventListener('scroll', showNav);
        return () => {
            window.removeEventListener('scroll', showNav);
        };

    }, []);

    return (

        <>

            <div className={`fixed w-full ${show ? "bg-transparent" : "bg-white shadow-xl transition duration-300"}`}>

                <div className="container">

                    <div className="py-3 flex justify-between items-center gap-x-10 md:gap-x-0">

                        <div className="img">

                            <Link to="/">
                                <img width="200px" src={logo} alt="" />
                            </Link>

                        </div>

                        <div className="flex items-center gap-x-2 lg:gap-x-7">

                            <Link to="/checkout">

                                <div className="cart flex items-center relative">

                                    <BsCart2 className="text-2xl" />
                                    <span className="symbol-btn absolute -right-3 -top-3 flex flex-col justify-center items-center w-6 h-6">{meal.length}</span>

                                </div>

                            </Link>

                            {
                                user?.email ? (
                                    <div className="flex items-center gap-x-3">
                                        <img src={user.photoURL} alt="user" className="rounded-full w-10" />
                                        <h1>{user.displayName}</h1>
                                        <button onClick={logOut} className="btn flex items-center gap-x-3">Log Out
                                            <div>
                                                <FiLogOut />
                                            </div>

                                        </button>
                                    </div>
                                ) : (<>
                                    <div>
                                        <Link to="/login">
                                            <button className="px-8 py-2 focus:ring-4 focus:ring-red-400 transition duration-300 rounded-full">Login</button>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link to="/login">
                                            <button className="btn">Sign Up</button>
                                        </Link>
                                    </div>
                                </>)
                            }

                        </div>

                    </div>

                </div >

            </div>

        </>
    );
};

export default Nav;

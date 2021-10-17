import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import '../styles/login.css';
import logo from '../assets/logo2.png';
import useFirebase from '../hooks/useFirebase';

const Login = () => {

    const { singInWithGoogle } = useFirebase();

    return (

        <>

            <div className="login-img ">

                <div className="container h-full flex items-center">

                    <div className="mx-auto lg:w-2/5 w-full bg-white flex p-10 rounded-2xl shadow-lg items-center justify-center">

                        <div className="flex flex-col gap-y-5">

                            <div className="mx-auto">

                                <img width="250px" src={logo} alt="logo" />

                            </div>

                            <input type="email" className="input" placeholder="Email" />
                            <input type="email" className="input" placeholder="Password" />
                            <button className="input-btn">Sing In</button>

                            <Link to="/login">
                                <h1 className="text-center text-red-500">Need An Account?</h1>
                            </Link>

                            <hr />

                            <h1 className="text-center text-gray-500">OR</h1>

                            <button onClick={singInWithGoogle} className="input-google flex justify-center items-center gap-x-3"><FcGoogle className="text-2xl" /> Sing in With Google</button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Login;

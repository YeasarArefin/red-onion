import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (

        <>

            <div className="container h-screen flex justify-center items-center">

                <div className="flex flex-col items-center gap-y-10">

                    <div>
                        <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="404" />
                    </div>

                    <Link to="/">
                        <button className="btn">Go Home</button>
                    </Link>

                </div>

            </div>

        </>

    );

};

export default NotFound;

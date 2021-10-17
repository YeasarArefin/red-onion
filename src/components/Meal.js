import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {

    const { id, name, img, description, price, type } = meal;

    return (

        <>

            <div className="p-3 w-9/12 mx-auto flex flex-col items-center rounded-xl hover:shadow-xl transition duration-150 border">

                <div className="food-img p-3 w-10/12">
                    <img src={img} alt="" />
                </div>

                <div className="food-text p-3 text-center">

                    <p className="bg-red-600 w-24 mx-auto mt-3 px-2 py-2 rounded-full text-white mb-4">{type}</p>
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-gray-400">{description}</p>
                    <p className="text-2xl font-bold mb-4">${price}</p>
                    <Link to={`/order/${id}`}>
                        <button className="btn">Order Now</button>
                    </Link>

                </div>

            </div>

        </>

    );
};

export default Meal;

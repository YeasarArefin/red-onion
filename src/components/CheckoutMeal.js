import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CheckoutMeal = ({ item, handleDelete }) => {

    const { id, name, img, price, quantity, type } = item;

    return (

        <>

            <div className="grid grid-cols-1">

                <div className="flex justify-between p-3 rounded-2xl transition duration-500 border hover:shadow-xl">

                    <div className="flex gap-x-10">
                        <div>
                            <img className="mx-auto" width="150px" src={img} alt="checkout-meal" />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className="font-semibold" >{name}</h1>
                            <h1 className="text-red-500 font-bold text-xl">${price * quantity}</h1>
                            <h1 className="font-light text-gray-600">{type}</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-5">

                        <h1>{quantity} items</h1>

                        <button onClick={() => handleDelete(id)} className="symbol-btn" >
                            <AiOutlineDelete className="text-xl" />
                        </button>

                    </div>

                </div>



            </div>

        </>

    );
};

export default CheckoutMeal;;

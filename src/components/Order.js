import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderMeal from './OrderMeal';

const Order = () => {
    const [meals, setMeals] = useState([]);
    let { id } = useParams();

    useEffect(() => {

        fetch('/meals.json')
            .then(res => res.json())
            .then(data => setMeals(data));

    }, []);

    return (
        <div>

            {
                meals.filter(meal => meal.id == id).map(meal => <OrderMeal meal={meal} />)
            }

        </div>
    );
};

export default Order;
import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {
	const [availableMeals, setAvailableMeals] = useState([]);

	async function fetchMeals() {
		const response = await fetch('http://localhost:3000/meals');
		const data = await response.json();
		setAvailableMeals(data);
		console.log(data);
	}

	useEffect(() => {
		fetchMeals();
	}, []);

	return (
		<div id='meals'>
			{availableMeals.map((meal) => (
				<MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description} imageUrl={meal.image} />
			))}
		</div>
	);
}

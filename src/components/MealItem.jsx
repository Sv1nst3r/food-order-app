export default function MealItem({ imageUrl, name, price, description }) {
	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${imageUrl}`} alt={name} />
				<h3>{name}</h3>
				<div className='meal-item-price'>{price}</div>
				<div className='meal-item-description'>{description}</div>
				<button className='actions'></button>
			</article>
		</li>
	);
}

import Header from './Header';
import Meals from './Meals';

import { useContext } from 'react';
import { ShopContext } from '../store/shop-context';
export default function Page() {
	const shopCtx = useContext(ShopContext);
	console.log(shopCtx);
	return (
		<>
			<Header />
			<Meals />
		</>
	);
}

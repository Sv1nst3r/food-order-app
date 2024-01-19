import { createContext, useState, useReducer } from 'react';

const initialShopState = {
	shop: {
		products: [],
		total: 0,
		isOpen:false,
	},
	addProduct: () => {},
	updateProduct: () => {},
	removeProduct: () => {},
};

function shopStateReducer(action, state) {}

export const ShopContext = createContext(initialShopState);

export default function ShopContextProvider({ children }) {
	const [isCheckout, setIsCheckout] = useState(false);
	const [shopState, shopStateDispatch] = useReducer(shopStateReducer, initialShopState);

	function handleAddProduct() {
		shopStateDispatch({ type: 'ADD_PRODUCT', payload: { id, qty, price } });
	}
	function handleRemoveProduct() {
		shopStateDispatch({ type: 'REMOVE_PRODUCT', payload: id });
	}
	function handleUpdateProduct() {
		shopStateDispatch({ type: 'UPDATE_PRODUCT', payload: id });
	}

	const ctxValue = {
		addProduct: handleAddProduct,
		removeProduct: handleRemoveProduct,
		updateProduct: handleUpdateProduct,
		products: shopState.products,
		isCheckout: isCheckout,
	};
}

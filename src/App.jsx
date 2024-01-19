import ShopContextProvider from './store/shop-context';
import Page from './components/Page';

function App() {

	return (
		<ShopContextProvider>
			<Page />
		</ShopContextProvider>
	);
}

export default App;

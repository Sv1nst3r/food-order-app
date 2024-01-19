import logoImg from '../assets/logo.jpg';

export default function Header() {
	return (
		<header id='main-header' className=''>
			<div id='title'>
				<h1>Food Order App</h1>
				<img src={logoImg} alt='App logo' />
			</div>
      <button>Cart</button>
		</header>
	);
}

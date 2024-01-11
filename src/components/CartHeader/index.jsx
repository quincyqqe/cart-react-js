import './style.scss'

const CartHeader = () => {
	return (
		<header className='cart-header'>
			<div className='cart-header__title'>Название</div>
			<div className='cart-header__count'>Количество</div>
			<div className='cart-header__cost'>Стоимость</div>
		</header>
	)
}

export default CartHeader

import './style.scss'

const CartFooter = ({ total }) => {
	const { count, price } = total
	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} ед.</div>
			<div className='cart-footer__price'>{price} UAH</div>
		</footer>
	)
}

export default CartFooter

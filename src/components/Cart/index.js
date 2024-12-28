import {useLocation} from 'react-router-dom'
import './index.css'

const Cart = () => {
  const location = useLocation()
  const {selectedWatch} = location.state || {}

  if (!selectedWatch) {
    return <div className="cart-empty">Your cart is empty!</div>
  }

  return (
    <div className="cart-container">
      <h2>Your Chosen Watch</h2>
      <div className="cart-content">
        <img
          src={selectedWatch.image}
          alt={selectedWatch.title}
          className="cart-watch-image"
        />
        <div className="cart-details">
          <h3>{selectedWatch.title}</h3>
          <p>
            <strong>Case:</strong> {selectedWatch.case}
          </p>
          <p>
            <strong>Band:</strong> {selectedWatch.band}
          </p>
          <p>
            <strong>Size:</strong> {selectedWatch.size}
          </p>
          <p>
            <strong>Price:</strong> ${selectedWatch.price}
          </p>
        </div>
      </div>
      <button type="button" className="cart-checkout-button">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Cart

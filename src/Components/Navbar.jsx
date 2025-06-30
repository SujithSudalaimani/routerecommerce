import { useCart } from '../Components/Cartcontext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"
         onClick={() => navigate('/')}
         >
            Home
         </a>
      </div>
        <div className='text-3xl text-amber-400 justify-center flex-1/12'>SHOPIFY</div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{cartItems.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartItems.length} Items</span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block" onClick={() => navigate('/cart')}>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
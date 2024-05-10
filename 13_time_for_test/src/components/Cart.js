import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // ** getting added cartItems from store using selector Hook **
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>

            <button
                className="p-2 m-2 bg-red-400 text-black font-semibold rounded-lg"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>

            <div className="w-6/12 m-auto">
                {cartItems.length === 0 && <h1>Cart is empty, Add Items to the cart!</h1>}

                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;
import "./css/CartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import {CartContext} from "../context/CartContext.jsx"


const CartWidget = () => {

    const {getTotalProducts} = useContext(CartContext);

    return (
        
            <button className="cart-widget logo">
            <FontAwesomeIcon icon={faCartShopping} size= "2x" color= "white"/> 
            <h2>{getTotalProducts()}</h2>
            </button>

    )

}

export default CartWidget;
import React, { useState } from 'react';
import '../App.css';

const CartItem = ({ imageData, addProduct, reduceProduct }) => {
    
    const [show, setShow] = useState(false);

        return (
            <div>
                <h3>{imageData.Title}</h3>
                <p>Kappalehinta: {imageData.Price}€</p>
                <p>Määrä: {imageData.Amount}</p>
                <p>Hinta yhteensä: {imageData.Amount * imageData.Price}</p>
                <br></br><br></br>
            </div>
        )
        }

const ShoppingCart = ({set, images}) => {
    const filteredItems = images.filter(item => item.Amount != 0);

const amounts = myImages.map(img => imageData.Amount * imageData.price);
const ordered = amounts.reduce((a, b) => a + b, 0);

    return(
        <div>
            <h3>ostoskori</h3>
            {filteredItems.map(c => (
                <CartItem imageData={c} key={c.id} />
            ))}

            //tuotteet tähän
            <p>yhteensä: </p>
        </div>
    )
}



export default ShoppingCart;
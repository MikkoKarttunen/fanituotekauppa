import React, { useState } from 'react';
import '../App.css';

const CartItem = ({ imageData, addProduct, reduceProduct }) => {

    // const [show, setShow] = useState(false);

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

const ShoppingCart = ({ set, images, setShow }) => {
    const filteredItems = images.filter(item => item.Amount != 0);

    const amounts = images.map(img => img.Amount * img.Price);
    const ordered = amounts.reduce((a, b) => a + b, 0);

    return (
        <div>
            <h3>ostoskori</h3>
            {filteredItems.map(c => (
                <CartItem imageData={c} key={c.id} />
            ))}
            <p>yhteensä: {ordered}€</p>
            <button onClick={e => setShow(false)}>Vahvista tilaus</button>
        </div>
    )
}



export default ShoppingCart;
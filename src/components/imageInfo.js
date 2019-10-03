import React, { useState } from 'react';
import '../App.css';



const ImageInfo = ({ imageData, addProduct }) => {
    //console.log(imageData.Title);
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div>
                <h3>{imageData.Title}</h3>
                <img src={imageData.Url} />
                <p>{imageData.Description}</p>
                <p>Hinta: {imageData.Price}€</p>
                <p>Määrä: {imageData.Amount}</p>
                <button onClick={e =>addProduct(imageData.id)}>Lisää</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>{imageData.title}</h3>
            </div>
        )
    }
}

const ImagesInfo = ({ images, set}) => {
    const addProduct = id => {
        const tempImages = [...images];
        tempImages.find(img => img.id === id).Amount++;
        set(tempImages);
    }
    return (
        <tbody>

            <div>

                {images.map(c => (
                    <ImageInfo imageData={c} key={c.id} addProduct={addProduct} />
                ))}
            </div>
        </tbody>
    )
}




export default ImagesInfo;

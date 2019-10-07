import React, { useState } from 'react';
import '../App.css';



const ImageInfo = ({ imageData, addProduct, reduceProduct }) => {
    //console.log(imageData.Title);
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <div>
                <h3>{imageData.Title}</h3>
                <button><img src={imageData.Url} onClick={e => setShow(false)}></img></button>
                <p>{imageData.Description}</p>
                <p>Hinta: {imageData.Price}€</p>
                <p>Määrä: {imageData.Amount}</p>
                <button onClick={e =>addProduct(imageData.id)}>Lisää</button>
                <button onClick={e =>reduceProduct(imageData.id)}>Poista</button>
                <br></br><br></br>
            </div>
        )
    }
    else {
        return (
            <div>
                <button><img src={imageData.Url} onClick={e => setShow(true)}></img></button>
                <br></br><br></br>
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
    const reduceProduct = id => {
        const tempImages = [...images];
        if (tempImages.find(img => img.id === id).Amount > 0){

        tempImages.find(img => img.id === id).Amount--;
        set(tempImages);

        }
    }

    return (
        <tbody>

            <div>

                {images.map(c => (
                    <ImageInfo imageData={c} key={c.id} addProduct={addProduct} reduceProduct={reduceProduct} />
                ))}
            </div>
        </tbody>
    )
}




export default ImagesInfo;

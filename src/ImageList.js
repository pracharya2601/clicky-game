import './ImageList.css';
import React from 'react';


const ImageList = (props) => {
    const images = props.images.map((images) => {
        return <img src={images.image} key={images.id} />
    });
    return(
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList
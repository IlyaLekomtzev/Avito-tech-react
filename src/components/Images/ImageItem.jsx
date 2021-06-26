import React from 'react';

const ImageItem = ({data, onClick}) => {
    return (
        <div className="image-item" onClick={onClick}>
            <img src={data.url} className="image-item__img" alt={data.id}/>
        </div>
    );
};

export default ImageItem;

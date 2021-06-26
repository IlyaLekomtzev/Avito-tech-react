import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';
import MainLoader from "../MainLoader";
import './images.scss';

const ImagesList = ({onClick}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            axios.get('https://boiling-refuge-66454.herokuapp.com/images')
                .then(res => res.data)
                .then(data => {
                    setImages(data);
                    setLoading(false);
                })
                .catch(e => {
                    console.error(e);
                });
        } catch {
            console.error('Ошибка соединения.');
        }
    }, []);

    if (loading) {
        return <MainLoader />;
    }

    return (
        <section className="images-list">
            {images.map(item => (
                <ImageItem key={item.id} data={item} onClick={() => onClick(item.id)} />
            ))}
        </section>
    );
};

export default ImagesList;

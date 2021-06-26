import React from 'react';
import ModalComments from './ModalComments';
import ModalForm from './ModalForm';
import { GoX } from "react-icons/go";
import './modal.scss';

const Modal = ({data, closeModal}) => {
    let classes = 'modal';
    let url = '';

    if (data !== null) {
        classes = `${classes} active`;
        url = data.url;
    }

    return (
        <div className={classes} onClick={closeModal}>
            <div className="modal__wrap" onClick={e => e.stopPropagation()}>
                <button className="modal__close" type="button" onClick={closeModal}>
                    <GoX />
                </button>
                <div className="modal__content">
                    <div className="modal__image">
                        <img src={url} alt=""/>
                    </div>
                    {data ? <ModalComments comments={data.comments} /> : ''}
                </div>
                <div className="modal__form">
                    {data ? <ModalForm imageId={data.id} /> : ''}
                </div>
            </div>
        </div>
    );
};

export default Modal;

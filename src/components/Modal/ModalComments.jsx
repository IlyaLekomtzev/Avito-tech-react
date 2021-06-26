import React from 'react';

const ModalComments = ({comments}) => {
    const getNormalDate = date => {
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        return `${day}.${month}.${date.getFullYear()}`;
    };

    if (comments.length === 0) {
        return (
            <div className="modal__comments">
                <span className="modal__comments-empty">Нет комментариев(</span>
            </div>
        );
    }

    const renderComments = comments.map(comment => {
        return (
            <div key={comment.id} className="modal__comment">
                <div className="modal__comment-date">{getNormalDate(new Date(comment.date))}</div>
                <div className="modal__comment-text">{comment.text}</div>
            </div>
        );
    });

    return (
        <div className="modal__comments">
            {renderComments}
        </div>
    );
};

export default ModalComments;

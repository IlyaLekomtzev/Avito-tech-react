import React, {useState} from 'react';
import axios from 'axios';

const ModalForm = ({imageId}) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const formSubmit = e => {
        e.preventDefault();

        try {
            axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`, {
                name,
                comment
            })
                .then(res => {
                    if (res.status === 204) {
                        alert('Ваш комментарий успешно добавлен!');
                        setName('');
                        setComment('');
                    } else {
                        alert('Не удалось добавить Ваш комментарий! Попробуйте снова');
                    }
                })
                .catch(e => console.error(e));
        } catch {
            console.error('Ошибка соединения.');
        }
        
    }

    const validate = () => {
        if (name.trim().length > 0 && comment.trim().length > 0) {
            return true;
        }

        return false;
    }

    return (
        <form className="form" action="" method="POST" onSubmit={formSubmit}>
            <input type="text" name="name" className="form__input" placeholder="Ваше имя" value={name} onInput={e => setName(e.target.value)} />
            <input type="text" name="comment" className="form__input" placeholder="Ваш комментарий" value={comment} onInput={e => setComment(e.target.value)} />
            <button className="form__button" disabled={!validate()}>Оставить комментарий</button>
        </form>
    );
};

export default ModalForm;

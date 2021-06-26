import React, {useState} from 'react';
import axios from 'axios';
import { Header, ImagesList, Modal } from './components';
import MainLoader from './components/MainLoader';

const App = () => {
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = async id => {
    try {
      setLoading(true);
      axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        .then(res => res.data)
        .then(data => {
          setLoading(false);
          setModal(data);
        });
    } catch {
        console.error('Ошибка соединения.');
    }
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div>
      <Header />
      <ImagesList onClick={id => openModal(id)} />
      <Modal data={modal} closeModal={() => closeModal()} />
      {loading ? <MainLoader /> : ''}
    </div>
  )
};

export default App;

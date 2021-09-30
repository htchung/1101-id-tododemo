import { useState } from 'react';
import Modal_xx from './Modal_xx';
import Backdrop_xx from './Backdrop_xx';

function Todo_xx(props) {
  const [showModal, setShowModal] = useState();
  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop_xx onClick={closeModalHandler} />}
      {showModal && (
        <Modal_xx text='Are you sure?' onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_xx;

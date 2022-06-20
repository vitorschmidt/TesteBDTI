import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  completedTaskThunk,
  editTaskThunk,
  removeTaskThunk,
} from "../../store/modules/Tasks/thunk";
import { Buttons, Container, ModalStyle } from "./style";

import Modal from "react-modal";

const Card = ({ task }) => {
  const [taskIsCompleted, setIsCompleted] = useState(task.isCompleted);
  const [updateDescription, setUpdateDescription] = useState(task.description);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  // função que marca se a tarefa foi concluida

  const handleCompletd = () => {
    setIsCompleted(!taskIsCompleted);
    dispatch(completedTaskThunk(task));
  };

  // função para atualizar a descrição das tasks

  const handleUpdate = () => {
    dispatch(editTaskThunk(task.id, updateDescription));
  };

  // funções abaixo da utilização e estilização da lib do modal

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <h3>{task.title}</h3>
      <div className="br"></div>
      <p>{task.description}</p>
      <div className="check">
        <h3
          className={task.isCompleted ? "completed-task" : "incompleted-task"}
        >
          Completa
        </h3>
        <input
          type="checkbox"
          onChange={handleCompletd}
          checked={taskIsCompleted}
        />
      </div>
      <Buttons>
        <button
          onClick={() => dispatch(removeTaskThunk(task.id))}
          className="delete"
        >
          Excluir
        </button>
        <button onClick={openModal} className="edit">
          Editar
        </button>
        <Modal isOpen={showModal} style={customStyles}>
          <ModalStyle>
            <div className="ModalTitle">
              <h2>Edite a sua tarefa:</h2>
              <button onClick={closeModal} className="closeModal">
                X
              </button>
            </div>
            <form onSubmit={handleUpdate}>
              <h3>Descrição:</h3>
              <input
                value={updateDescription}
                onChange={(event) => setUpdateDescription(event.target.value)}
                type="text"
                name="editDescription"
              />
              <button className="editModal">Editar</button>
            </form>
          </ModalStyle>
        </Modal>
      </Buttons>
    </Container>
  );
};

export default Card;

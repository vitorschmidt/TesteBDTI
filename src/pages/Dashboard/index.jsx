import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TotalTasks from "../../components/TotalTasks";

import { addTaskThunk } from "../../store/modules/Tasks/thunk";
import { Container } from "./style";

const Dashboard = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [filter, setFilter] = useState("");

  const tasks = useSelector(({ tasks }) => tasks);

  const dispatch = useDispatch();

  // Função que adiciona uma task a lista de tarefas
  const handleAddTask = (event) => {
    event.preventDefault();
    toast.success("Tarefa adicionada!");
    dispatch(
      addTaskThunk({
        id: tasks.length + 1,
        title: inputTitle,
        description: inputDescription,
        value: 1,
        isCompleted: false,
      })
    );
  };

  // função que filtra os elementos recebidos do array do useSelector para criar o filtro dos botões

  const taskFilter = tasks.filter((task) => {
    console.log(filter);
    if (filter || filter === false) {
      return task.isCompleted === filter;
    }

    return task;
  });

  // função que mostra os itens filtrados em tela

  const showCards = taskFilter.map((task) => (
    <Card key={task.id} task={task} />
  ));

  return (
    <Container>
      <h2>Adicione uma nova tarefa:</h2>
      <form onSubmit={handleAddTask}>
        <label>Título:</label>
        <input
          onChange={(event) => setInputTitle(event.target.value)}
          type="text"
          name="title"
          placeholder="Adicione um título"
        />
        <label>Descrição:</label>
        <input
          onChange={(event) => setInputDescription(event.target.value)}
          type="text"
          name="description"
          placeholder="Adicione uma descrição"
        />
        <Button type="submit" backGround="#ee6c4d" width="100%">
          Adicionar
        </Button>
      </form>
      <h3>Tarefas:</h3>
      <div className="filterButtons">
        <Button
          backGround="#ee6c4d"
          width="33%"
          className="allTasks"
          onClick={() => setFilter("")}
        >
          Todas
        </Button>
        <Button
          backGround="#ee6c4d"
          width="33%"
          className="allTasks"
          onClick={() => setFilter(true)}
        >
          Completas
        </Button>
        <Button
          backGround="#ee6c4d"
          width="33%"
          className="allTasks"
          onClick={() => setFilter(false)}
        >
          Incompletas
        </Button>
      </div>
      <div className="cards">
        {tasks.length === 0 ? (
          <h3>Você ainda não possui nenhuma tarefa! ;(</h3>
        ) : (
          showCards
        )}
      </div>
      <TotalTasks />
      <Button className="logout">
        <Link to="/">Sair</Link>
      </Button>
    </Container>
  );
};

export default Dashboard;

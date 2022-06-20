import { useSelector } from "react-redux";

import { Container } from "./style";

const TotalTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);

  //filtro para verificar as tarefas que foram completas e fazer a contagem

  const completed = tasks.filter((task) => {
    if (!task.isCompleted) {
      return task.length;
    }
    return task;
  });

  const incompleted = tasks.filter((task) => {
    if (task.isCompleted) {
      return task.length;
    }
    return task;
  });

  return (
    <Container>
      <h3>Total de tarefas: {tasks.length}</h3>
      <h3>Completas: {completed.length}</h3>
      <h3>Incompletas: {incompleted.length}</h3>
    </Container>
  );
};
export default TotalTasks;

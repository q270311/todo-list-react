import { useState, useEffect } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "./TaskList/useTasks";

function Tasks() {
  const [hideDone, setHideDone] = useState(localStorage.getItem("hideDone") ? JSON.parse(localStorage.getItem("hideDone")) : false);

  useEffect(() => {
    localStorage.setItem("hideDone", hideDone);
  }, [hideDone]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <div className="App">
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
          body={<TaskList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        />
      </Container>
    </div>
  );
}

export default Tasks;

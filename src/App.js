import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zadanie 1", done: false },
    { id: 2, content: "zadanie 2", done: true },
    { id: 3, content: "zadanie 3", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  }
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  }

  return (
    <div className="App">
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
          body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        />
      </Container>
    </div>

  );
}

export default App;

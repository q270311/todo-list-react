import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasksTable = [
  { id: 1, content: "zadanie 1", done: false },
  { id: 2, content: "zadanie 2", done: true },
  { id: 3, content: "zadanie 3", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1 className="header">Lista zadań</h1>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
          body={<Tasks tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
        />
      </div>
    </div>
  );
}

export default App;

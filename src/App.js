import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasksTable = [
  { id: 1, content: "zadanie 1", done: false },
  { id: 2, content: "zadanie 2", done: true },
  { id: 3, content: "zadanie 3", done: false },
];
const hideDoneTasks = false;

function App() {
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
          extraHeaderContent={<Buttons tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
          body={<Tasks tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
        />
      </Container>
    </div>

  );
}

export default App;

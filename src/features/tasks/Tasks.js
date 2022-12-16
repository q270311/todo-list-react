import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import {DownloadExampleTasksButton} from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <div className="App">
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          extraHeaderContent={<DownloadExampleTasksButton />}
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons />}
          body={<TaskList />}
        />
      </Container>
    </div>
  );
}

export default Tasks;

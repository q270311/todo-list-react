import Form from "./Form";
import TaskList from "./TaskList";
import {ManageTasksButtons, ExampleTasksButton} from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

const  TasksPage = () =>{
  return (    
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          extraHeaderContent={<ExampleTasksButton />}
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<ManageTasksButtons />}
          body={<TaskList />}
        />
      </Container>    
  );
}

export default TasksPage;

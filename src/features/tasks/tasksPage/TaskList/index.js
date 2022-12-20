import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
   const { tasks, hideDone } = useSelector(selectTasksState);
   const dispatch = useDispatch();
   
   return (
      <List>
         {tasks.map(task => (
            <Item
               key={task.id}
               hidden={task.done && hideDone}
            >
               <Button
                  toggleDone
                  onClick={() => dispatch(toggleTaskDone(task.id))}
               >
                  {task.done ? "✔" : ""}
               </Button>
               <Content done={task.done}>
                  <Link to={`/zadania/${task.id}`}>{task.content}</Link>
               </Content>
               <Button
                  remove
                  onClick={() => dispatch(removeTask(task.id))}
               >
                  🗑
               </Button>
            </Item>
         ))}
      </List>
   );
};

export default TaskList; 
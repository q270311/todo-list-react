import "./style.css";

const Tasks = (props) => (
   <ul className="list">
      {props.tasks.map(task => (
         <li
            key={task.id}
            className={`list__item ${task.done && props.hideDone ? "list__item--hidden" : ""}`}
         >
            <button className="list__icon list__icon--green">
               {task.done ? "✔" : ""}
            </button>
            <span className={`list__taskText ${task.done ? " list__taskText--done" : ""}`}>
               {task.content}
            </span>
            <button className="list__icon list__icon--red" onClick={() => props.removeTask(task.id)} >🗑</button>
         </li>
      ))}
   </ul >
);

export default Tasks; 
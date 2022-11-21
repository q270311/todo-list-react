import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__text"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <input type="button" value="Dodaj zadanie" className="form__button" />
        </form>
    );
};

export default Form;

import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
    }
    
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__text"
                onChange={({ target }) => setNewTaskContent(target.value.trim())}
            />
            <input type="submit" value="Dodaj zadanie" className="form__button" />
        </form>
    );
};

export default Form;

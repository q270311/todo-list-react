import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const inputTextRef = useRef(null);

    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim()
        if (!trimmedNewTaskContent) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                ref={inputTextRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__text"
                onChange={({ target }) => setNewTaskContent(target.value.trim())}
            />
            <input
                type="submit"
                value="Dodaj zadanie"
                className="form__button"
                onClick={() => inputTextRef.current.focus()}
            />
        </form>
    );
};

export default Form;

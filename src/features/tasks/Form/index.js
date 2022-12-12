import { useState, useRef } from "react";
import { NewTaskForm, InputText } from "./styled";

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
        <NewTaskForm onSubmit={onFormSubmit}>
            <InputText
                type="text"
                ref={inputTextRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__text"
                onChange={({ target }) => setNewTaskContent(target.value.trim())}
            />
            <InputText
                type="submit"
                value="Dodaj zadanie"
                className="form__button"
                onClick={() => inputTextRef.current.focus()}
            />
        </NewTaskForm>
    );
};

export default Form;

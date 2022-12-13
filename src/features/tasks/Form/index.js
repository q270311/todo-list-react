import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { NewTaskForm, InputText } from "./styled";

const Form = () => {
    const inputTextRef = useRef(null);
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim()
        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

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

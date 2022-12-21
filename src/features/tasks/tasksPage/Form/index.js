import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { StyledForm } from "./styled";
import { Input } from "../Input/styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                type="text"
                ref={inputTextRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__text"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Input
                type="submit"
                value="Dodaj zadanie"
                className="form__button"
                onClick={() => inputTextRef.current.focus()}
            />
        </StyledForm>
    );
};

export default Form;

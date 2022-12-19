import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone, fetchExampleTasks } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

export const ManageTasksButtons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ButtonsContainer>
                <Fragment>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </Fragment>
            </ButtonsContainer>
        )
    )
};

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())} >
                Pobierz przykładowe zadania
            </Button>
        </ButtonsContainer>
    );
}


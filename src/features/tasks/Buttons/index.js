import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = () => {
    const { tasks } = useSelector(selectTasks);
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

export const DownloadExampleTasksButton = () => {
    return (
        <ButtonsContainer>
                <Button onClick={null} >
                    Pobierz przykładowe zadania
                </Button>
        </ButtonsContainer>
    );
}

export default Buttons;
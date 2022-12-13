import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        tasks.length > 0 && (
            <ButtonsContainer>
                <Fragment>
                    <Button onClick={()=>dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </Fragment>
            </ButtonsContainer>
        )
    )
};

export default Buttons;
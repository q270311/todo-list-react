import { Fragment } from "react";
import { ButtonsContainer, Button } from "./styled";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <ButtonsContainer>
            <Fragment>
                <Button onClick={props.toggleHideDone} >
                    {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={props.tasks.every(({ done }) => done)}
                    onClick={props.setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </Fragment>
        </ButtonsContainer>
    )
);
export default Buttons;
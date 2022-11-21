import { Fragment } from "react";
import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons__container">
            <Fragment>
                <button
                    className="buttons__button"
                    onClick={props.toggleHideDone}
                >
                    {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={props.tasks.every(({ done }) => done)}
                    onClick={props.setAllDone}
                >
                    Ukończ wszystkie
                </button>
            </Fragment>
        </div>
    )
);
export default Buttons;
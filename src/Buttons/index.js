import { Fragment } from "react";
import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons__container">
            <Fragment>
                <button
                    type="button"
                    className="buttons__button"
                >
                    {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    type="button"
                    className="buttons__button"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </Fragment>
        </div>
    )
);
export default Buttons;
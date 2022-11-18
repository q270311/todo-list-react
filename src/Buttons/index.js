import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons__container">
            <button type="button" className="buttons__button">
                {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone </button>

            <button type="button" className="buttons__button" >
                {props.tasks.every(({ done }) => done) ? " disabled" : ""}Ukończ wszystkie</button>
        </div>
    )
);
export default Buttons;
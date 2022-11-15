import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" autofocus placeholder="Co jest do zrobienia?" className="form__text" />
        <input type="button" value="Dodaj zadanie" className="form__button" />
    </form>
);

export default Form;

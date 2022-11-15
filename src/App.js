import Form from "./Form";

const  taskTable = [
  {id:1, content: "zadanie 1", done: false},
  {id:2, content: "zadanie 2", done: true},
  {id:3, content: "zadanie 3", done: false},
];
const  hideDoneTask = false;

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1 className="header">Lista zadań</h1>
        <section className="section">
            <div className="section__header">
                Dodaj nowe zadanie
            </div>
            <Form />
        </section>
        <section className="section">
            <div className="section__header">
            </div>
            <ul className="list">
            </ul>
        </section>
    </div>
    </div>
  );
}

export default App;

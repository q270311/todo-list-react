import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/tasksPage';
import TaskPage from './features/tasks/taskPage';


const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania"> zadania </Link>
                </li>
                <li>
                    <Link to="/autor"> o autorze </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;
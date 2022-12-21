import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/tasksPage';
import TaskPage from './features/tasks/taskPage';
import {Nav, Ul, Li, StyledActiveLink} from './styled';


const App = () => (
    <HashRouter>
        <Nav>
            <Ul>
                <Li>
                    <StyledActiveLink to="/zadania"> zadania </StyledActiveLink>
                </Li>
                <Li>
                    <StyledActiveLink to="/autor"> o autorze </StyledActiveLink>
                </Li>
            </Ul>
            </Nav>
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
        
    </HashRouter>
);

export default App;
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage  from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Route exact path='/log-in'>
                <LoginPage/>
            </Route>
            <Route exact path='/about'>
                <AboutPage/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
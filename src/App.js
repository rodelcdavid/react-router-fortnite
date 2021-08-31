import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav/>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/About' component={About}></Route>
            <Route path='/Shop' component={Shop}></Route>
        </Switch>
    </Router>
  );
}

export default App;

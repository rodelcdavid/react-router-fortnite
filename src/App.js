import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import ItemDetails from './components/ItemDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router basename='/react-router-fortnite'>
      <Nav/>
      <div className='nav-separator'></div>

        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/shop' exact component={Shop}></Route>
            <Route path='/shop/:id' component={ItemDetails}></Route>
        </Switch>
  
    </Router>
  );
}

export default App;

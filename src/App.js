import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import OrderC from './pages/OrderC';

function App() {
  

  return (
      <Router>
        <Header/>
        <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/order/:id' component={OrderC}/>
        </Switch>
        </div>
      </Router>
  );
}

export default App;

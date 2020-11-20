import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import OrderC from './pages/OrderC';
import AddProduct from './pages/AddProduct';

function App() {
  

  return (
      <Router>
        <Header/>
        <div className='container mb-4'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/order/:id' component={OrderC}/>
          <Route exact path='/order/:id/add-product' component={AddProduct}/>
        </Switch>
        </div>
      </Router>
  );
}

export default App;

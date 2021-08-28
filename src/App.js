import Main from './pages/Main';
import { useContext } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Confirmation from './pages/Confirmation';
import AppContext from './components/context/AppContext';

function App() {
  const { order } = useContext(AppContext);
  console.log(order)

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/confirmation" component={() => <Confirmation order={order}/>} />
    </Switch>
  );
}

export default App;

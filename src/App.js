import Main from './pages/Main';
import { useContext } from 'react';
import { Switch, Route } from 'react-router';

import Confirmation from './pages/Confirmation';
import AppContext from './components/context/AppContext';
import Header from './components/Header';

function App() {
  const { order } = useContext(AppContext);
  console.log(order)

  return (
    <>
      <Header title="DrivenEats" subtitle="Sua comida em 6 minutos" />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/confirmation" component={() => <Confirmation order={order}/>} />
      </Switch>
    </>
  );
}

export default App;

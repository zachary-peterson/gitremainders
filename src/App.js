import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} /> 
      </Switch>
    </>
  );
}

export default App;

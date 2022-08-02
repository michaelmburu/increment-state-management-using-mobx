import logo from './logo.svg';
import './App.css';
import { CounterButton } from './CounterButton';
import { Counter } from './MobX/Counter';

//Instantiate Counter Class
const counter = new Counter();

//State management with MobX, pass counter as prop
function App() {
  return (
    <>
      <h1>State Management With MobX</h1>
      <CounterButton counter={counter} />
    </>
  );
}

export default App;

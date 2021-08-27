import './App.css';
import HookCounterTwo from './components/HookCounterTwo';
import  ClassCounterTwo from './components/ClassCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo/>
      <br/><ClassCounterTwo/>
    </div>
  );
}

export default App;

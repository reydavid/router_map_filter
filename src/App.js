import './App.css';
import Posts from './Components/Posts';
import Users from './Components/Users';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
      <Posts />
      <Users />
      <Todos />
      </header>
    </div>
  );
}

export default App;

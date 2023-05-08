import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div >
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import State from './State';
import Effect from './Effect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="state" element={<State/>}/>
      <Route path="effect" element={<Effect/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  );
}

export default App;

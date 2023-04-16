import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import State from './State';
import Effect from './Effect';
import NavBar from './NavBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="state" element={<State/>}/>
        <Route path="effect" element={<Effect/>}/>
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Openingpage from './Components/Openingpage.js'
import Problem from './Components/Problem.js'
import About from './Components/About.js'

function App() {
  return (
    <>   
      <Router>
        <Routes>
          <Route path="/" element={<Openingpage/>}/>
          <Route path="/Problem" element={<Problem/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>  
    </>
  );
}

export default App;

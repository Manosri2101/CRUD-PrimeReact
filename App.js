
import Main from './components/main';
import Create from './components/create';
import Edit from './components/edit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Add from './Add';
import Update from './Update';
import Validation from './Validation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Update/:id' element={<Update/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Validation' element={<Validation/>}/>
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;

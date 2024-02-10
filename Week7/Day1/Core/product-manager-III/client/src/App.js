import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayOne from './components/DisplayOne';
import Main from "./views/Main"
import Update from './components/Update';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/products' element={<Main/>}/>
        <Route path='/products/:id' element={<DisplayOne/>}/>
        <Route path='/products/edit/:id' element={<Update/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

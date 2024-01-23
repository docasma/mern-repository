import './App.css';
import {Routes,Route,BrowserRouter} from"react-router-dom"; 
import Number from './component/Number';
import Home from './component/Home';
import Word from './component/Word';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route path='/home' element={<Home/>} />
          <Route path='/:id' element={<Number/>} />
          <Route path='/:word/:font/:background' element={<Word/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

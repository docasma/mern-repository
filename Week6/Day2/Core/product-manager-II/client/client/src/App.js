
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Form from './components/Form';
import Main from './components/Main';

import View from './components/View';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/products" element={<Form/>}/>
        <Route path="/products/:id" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;

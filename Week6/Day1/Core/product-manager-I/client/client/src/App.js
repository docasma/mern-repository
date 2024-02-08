
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1>PRODUCT MANAGER</h1>
      <Routes>
        <Route path="/products" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;

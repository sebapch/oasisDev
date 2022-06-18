import './App.css';
import TableAdmin from './Components/Table/TableAdmin';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Crear from './Components/crear/Crear';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <TableAdmin />} />
      <Route path="/create" element={ <Crear />} /> 
    </Routes>
  </BrowserRouter>
     
    </>
  );
}

export default App;

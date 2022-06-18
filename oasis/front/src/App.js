import './App.css';
import AdminTable from './Components/AdminTable/AdminTable';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Crear from './Components/crear/Crear';
import Editar from './Components/Editar/Editar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AdminTable />} />
      <Route path="/create" element={ <Crear />} /> 
      <Route path="/edit/:id" element={ <Editar />} />
    </Routes>
  </BrowserRouter>
     
    </>
  );
}

export default App;

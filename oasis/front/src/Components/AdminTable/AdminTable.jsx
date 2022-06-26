import MUIDataTable from "mui-datatables";
import React, {useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import DarkMode from '../../DarkMode.jsx'
import './AdminTable.css';



const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const AdminTable = () => {
  const [selected, isSelected] = useState('green');
  

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    { name: "seniority", id: "test" },
    "Stack Principal",
    "Skills",
    "Location",
    "Rate",
    "English",
    "Fecha de Presentacion",
    "Empresa",
    "Experiencia",
    "Acciones",
  ];

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  //function that deletes user with axios
  const deleteUser = (id) => {
    Axios.delete(`/users/${id}`)
      .then((response) => {
        console.log(response);
      }
      )
      .catch((error) => console.log(error));
  }





  return (
    <>
      
        <CacheProvider value={muiCache}>
            <Link to={"/create"}>
              <Button variant="contained" color="secondary">Create User</Button>
            </Link>
            <DarkMode />
            
            <MUIDataTable

              title={"OASIS"}
              
              data={users.map((user) => {
                return [
                  user.name,
                  user.seniority,
                  user.mainStack,
                  user.skills,
                  user.location,
                  user.rate,
                  user.english,
                  user.fechaPresentacion,
                  user.empresa,
                  user.experiencia,
                  <>
                  <select name="estado" className="select">
                    <option value="red" id='red' style={{backgroundColor: 'red'}}>red</option>
                    <option value="yellow" id='yellow'>yellow</option>
                    <option value="green" id='green' style={{backgroundColor: 'green'}}>green</option>
                    <option value="gray" id='gray' style={{backgroundColor: 'gray'}}>gray</option>
                  </select>
                  <Link to={`/edit/${user._id}`}>
                    <Button variant="contained" color="secondary">Edit</Button>
                    <Button variant="contained" color="error" onClick={() => { deleteUser(user._id); } }>Delete</Button>
                  </Link>
                  </>,
                  
                ];
              })}
              columns={columns}
              theme='dark'
              
            />
            
        </CacheProvider>
      
    </>
  );
};

export default AdminTable;

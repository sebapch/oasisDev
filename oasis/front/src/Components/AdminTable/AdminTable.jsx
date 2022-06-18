import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const AdminTable = () => {
  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Seniority",
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
          <ThemeProvider theme={createTheme()}>
            <Link to={"/create"}>
              <Button>Create User</Button>
            </Link>
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
                  

                  <Link to={`/edit/${user._id}`}>
                    <Button>Edit</Button>
                    <Button onClick={() => { deleteUser(user._id); } }>Delete</Button>
                  </Link>,
                ];
              })}
              columns={columns}
            />
          </ThemeProvider>
        </CacheProvider>
      
    </>
  );
};

export default AdminTable;

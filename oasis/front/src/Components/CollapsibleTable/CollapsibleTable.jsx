import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  console.log(row)
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.seniority}</TableCell>
        <TableCell align="right">{row?.mainStack}</TableCell>
        <TableCell align="right">{row.skills}</TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.rate}</TableCell>
        <TableCell align="right">{row.english}</TableCell>
        <TableCell align="right">{row.fechaPresentacion}</TableCell>
        <TableCell align="right">{row.empresa}</TableCell>
        <TableCell align="right">{row.experiencia}</TableCell>
        <TableCell align="right">{row.gmail}</TableCell>
        <TableCell align="right">{row.linkedin}</TableCell>
        <TableCell align="right"><Button>Editar</Button><Button>Borrar</Button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}





export default function CollapsibleTable() {

  //get array of users from database with axios settings
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, []);

  console.log(users)

  return (


    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre y apellido</TableCell>
            <TableCell align="right">Señority </TableCell>
            <TableCell align="right">Stack Principal</TableCell>
            <TableCell align="right">Skills</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">English</TableCell>
            <TableCell align="right">Fecha de Presentacion</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Experiencia</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {users && users.map((user) => (
            <Row key={user?._id} row={user} />
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
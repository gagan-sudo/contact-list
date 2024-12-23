import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Users } from '../../utils/types';
import UsersActions from './UsersActions';
import { ReactNode } from 'react';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import {  ErrorOutline, Refresh } from '@mui/icons-material';



export default function UsersTable() {

  const users = useSelector((state: { users: Users }) => state.users)
  // console.log(users)

  if (users.status === 'loading') {
    return (
      <>
        <Box sx={{
          height: '70vh', width: '100%', display: 'flex', alignItems: "center",
          justifyContent: 'center'
        }}>
          <CircularProgress />
        </Box>
      </>
    )
  }
  else if (users.status === 'succeeded') {
    return tabledata(users)
  }
  else {
    return <>
 <Box sx={{
          height: '10vh',
           display: 'flex', alignItems: "center",
          justifyContent: 'center'
        }}>
          <Stack direction={"row"} spacing={0.5}>
           <ErrorOutline color='error'/>
          <Typography color="error">
            {
              users.error
            }
          </Typography>
            </Stack>
        </Box>
        <Box sx={{
          display: 'flex',
           alignItems: "center",
          justifyContent: 'center'
        }} >
            <Button variant="contained" size='large'
            href='/'
            startIcon={<Refresh/>}
            >Reload</Button>
            </Box>
    </>
  }


}


const tabledata = (users: Users): ReactNode => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  <UsersActions data={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
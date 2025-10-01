import React, { useState, useEffect } from 'react';
import '../App.css';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Typography
} from '@mui/material';

const API_URL = 'https://j1f9wp1336.execute-api.us-east-1.amazonaws.com/dev/users';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  background: #f3f3f3;
  & > div > table > thead {
    background: #000000;
    border: 1px solid #000;
    border-radius: 15px;
  }
  & > div > table > thead > tr > th {
    color: #fff;
    font-size: 16px;
  }
  & > h4 {
    margin-bottom: 15px;
  }
`;

const User = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       // If your Lambda returns { users: [...] }, use setUsers(data.users)
  //       setUsers(Array.isArray(data) ? data : data.users || []);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      // data.body is a stringified array, so parse it
      const usersArray = JSON.parse(data.body);
      setUsers(Array.isArray(usersArray) ? usersArray : []);
    })
    .catch(err => console.error(err));
}, []);


  const removeEntry = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) setUsers(users.filter(user => user.id !== id));
      });
  };

  return (
    <>
      <StyledTable>
        <Typography variant='h4'>User</Typography>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Remove Entry</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      color='error'
                      onClick={() => removeEntry(user.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </StyledTable>
    </>
  );
};

export default User;
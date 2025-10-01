import {
  styled,
  Table,
  Box,
  Typography,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";

 const styledTable = styled(Box)`
  width: 80%`;

const Users = () => {
 
const userObjects = {
  id: 1,
  name: "Samiullah",
  email: "samiullah@gmail.com",
  phone: "031111111",
  salary: "0000000",
  age: "30",
}
  return (
    <>
        
        <styledTable>
          <Typography variant="h3">Users Data</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>salary</TableCell>
                <TableCell>age</TableCell>
                <TableCell>Remove Entry</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                
              }
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Samiullah</TableCell>
                <TableCell>Samiullah@gmail.com</TableCell>
                <TableCell>031111111</TableCell>
                <TableCell>0000000</TableCell>
                <TableCell>30</TableCell>
                <TableCell>
                  <Button variant="contained" color="error">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </styledTable>
    </>
  );
};

export default Users;

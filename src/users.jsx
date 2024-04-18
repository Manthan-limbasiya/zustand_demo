import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import useStore from "./userstore";

const Users = (props) => {
  const { users, getUsers } = useStore((state) => state);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users?.length > 0 && (
        <Grid container spacing={3}>
          {users?.map((user) => (
            <Grid item sm={3}>
              <Paper>
                <h5>{user.name}</h5>
                <p>{user.email}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Users;

import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import counterStore from "./counterstore";

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#C2E0FB",
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 5),
  "&:hover": {
    backgroundColor: "#CCEAF5",
  },
}));

const Counter = (props) => {
  const counter = counterStore((state) => state.counter);
  const increaseCounter = counterStore((state) => state.increaseCounter);
  const decreaseCounter = counterStore((state) => state.decreaseCounter);
  const increaseBy = counterStore((state) => state.increaseBy);
  const decreaseBy = counterStore((state) => state.decreaseBy);
  const reset = counterStore((state) => state.reset);

  return (
    <Container sx={containerStyle}>
      <Typography>{counter}</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={increaseCounter}>+</PrimaryButton>
          <PrimaryButton onClick={() => increaseBy(10)}>
            increase by 10
          </PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={decreaseCounter}>-</PrimaryButton>
          <PrimaryButton onClick={() => decreaseBy(10)}>
            decrease by 10
          </PrimaryButton>
        </Stack>
        <PrimaryButton onClick={reset}>reset counter</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default Counter;

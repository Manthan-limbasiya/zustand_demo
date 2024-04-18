import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Counter from "./counter";
import Users from "./users";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Counter /> */}
        <Users />
      </ThemeProvider>
    </>
  );
}

export default App;

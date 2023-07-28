import mystyle from "../Style.module.css";
import {
  AppBar,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <Typography className={mystyle.title} variant="h4">
              JobHunter.com
            </Typography>
            <Select
              variant="outlined"
              sx={{ background: "#454444" }}
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "white",
              }}
            >
              <MenuItem value={"usd"}>USD</MenuItem>
              <MenuItem value={"bdt"}>BDT</MenuItem>
              <MenuItem value={"inr"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;

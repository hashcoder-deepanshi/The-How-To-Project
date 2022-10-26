import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import CBlogo from "./Images/CB-LOGO.png";
import Celestial from "./Images/CB.png";

const drawerWidth = 240;

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: "#000",
//     },
//   },
// });

function NavBar() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(70, 43, 136, 0.4)",
            color: "white",
          },
        }}
        sx={{
          mx: 20,
          my: 10,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Box>
          <Typography
            marginLeft={"-10px"}
            marginBottom={"20px"}
            textAlign={"center"}
            variant="h5"
            color={"#C69AF6"}
          >
            {" "}
            CELESTIAL <br /> BISCUIT{" "}
          </Typography>
        </Box>

        <Divider />
        <List>
          {["Home", "My Feed", "Trending", "My Activity"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Bookmarks", "Customize", "Contribute", "Feedback"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;

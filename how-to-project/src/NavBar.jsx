import React, { useState } from "react";
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
import Button from "@mui/material/Button";
import PopUp from "./PopUp.jsx";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const drawerWidth = 240;

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: "#000",
//     },
//   },
// });

function NavBar() {
  const [openPopUp, setOpenPopUp] = useState(false);

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
          {["Home", "My Feed", "Trending", "My Activity", "Bookmarks"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          <ListItem key="Customize" disablePadding>
            <ListItemButton onClick={() => setOpenPopUp(true)}>
              <Dialog className="Pop-Up" open={openPopUp}>
                <DialogTitle>This is Title</DialogTitle>

                <DialogContent>Here's the content</DialogContent>
              </Dialog>

              {/* <PopUp openPopUp={openPopUp} set={setOpenPopUp} /> */}
              <ListItemText primary="Customize" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Contribute" disablePadding>
            <ListItemButton>
              <Dialog className="Pop-Up" open={openPopUp}>
                <DialogTitle>This is Title</DialogTitle>

                <DialogContent>Here's the content</DialogContent>
              </Dialog>
              <ListItemText primary="Contribute" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Feedback" disablePadding>
            <ListItemButton>
              <Dialog className="Pop-Up" open={openPopUp}>
                <DialogTitle>This is Title</DialogTitle>

                <DialogContent>Here's the content</DialogContent>
              </Dialog>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;

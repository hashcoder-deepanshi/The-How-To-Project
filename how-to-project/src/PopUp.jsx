import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

const style = {
  height: "30%",
  width: "40%",
  justifyContent: "center",
  background: "none",
  bgColor: "transparent",
};

function PopUp(props) {
  return (
    <>
      <Dialog sx={style} className="Pop-Up" open={props.openPopUp}>
        <DialogTitle>This is Title</DialogTitle>

        <DialogContent>Here's the content</DialogContent>
      </Dialog>
    </>
  );
}

export default PopUp;

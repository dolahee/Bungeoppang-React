import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  searchResult: SearchResult[];
}

export default function Modal({ searchResult }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickMove = () => {};
  return (
    <div>
      <Button
        type="submit"
        size="large"
        variant="contained"
        onClick={handleClickOpen}
      >
        검색
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"찾으시는 지역이 있나요?"}
        </DialogTitle>
        <DialogContent>
          <Box onClick={clickMove}>
            {searchResult.map((el, index) => (
              <Typography key={index} variant="h5" component="div" p={1}>
                {el.title}
                <Typography variant="subtitle1" component="div">
                  {el.address.parcel}
                </Typography>
                <hr />
              </Typography>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import {
  Dialog,
  DialogTitle,
  Fab,
  Tooltip,
  Typography,
  styled,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";

const StyleModal = styled(Dialog)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gab: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45%)", md: 30 },
        }}
      >
        <Fab
          color="success"
          aria-label="add"
          onClick={(e) => {
            setOpenDialog(true);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={openDialog}
        onClose={(e) => {
          setOpenDialog(false);
        }}
      >
        <DialogTitle variant="h6" color={"gray"} textAlign="center">
          Dialogo
        </DialogTitle>
        <Box p={3} width={400} height={300} borderRadius={3}>
          <UserBox>
            <Avatar
              src=""
              sx={{ width: 30, height: 30, marginRight: 1 }}
            ></Avatar>
            <Typography fontWeight={500} variant="span">
              Juanito Escarcha
            </Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            // label="Dostos a Publicar"
            multiline
            rows={4}
            sx={{ width: "100%" }}
            placeholder="what`s on tour mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            color="success"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange /></Button>
         
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

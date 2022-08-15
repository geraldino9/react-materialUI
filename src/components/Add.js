import { Fab, Tooltip } from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
export const Add = () => {
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
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

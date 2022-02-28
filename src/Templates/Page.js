// Template padrão para exibição de dados
import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

// Estilo do container
const useStyles = makeStyles(() => ({
  container: {
    padding: "10px 0",
  },
}));

const Page = ({ title, Component }) => {
  return (
    <>
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
      <Component />
    </>
  );
};

export default Page;

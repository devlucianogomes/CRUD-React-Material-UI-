// Template padrão para exibição de dados
import React from "react";

import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/styles";
import Header from "../Partials/Header/Header";

// Estilo do container
const useStyles = makeStyles(() => ({
  container: {
    padding: "10px 0",
    background: "red",
  },
}));

const Default = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

export default Default;

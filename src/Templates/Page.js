// Template padrão para exibição de dados
import React from "react";

import { Typography } from "@mui/material";

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

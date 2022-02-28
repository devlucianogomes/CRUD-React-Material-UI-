import React, { useEffect, useState } from "react";
// import do axios para consumo de api
import axios from "axios";
import Grid from "@mui/material/Grid";
import CustomerCard from "../Components/CustomerCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
  },
}));

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // fazendo as requisicoes assim que montado o componente em tela
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      // o response nos retorna um obj, entao fazemos a desestruturação
      const { data } = response.data;
      setCustomers(data);
    });
  }, []);

  return (
    <>
      <Grid container>
        {customers.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <CustomerCard
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Customers;

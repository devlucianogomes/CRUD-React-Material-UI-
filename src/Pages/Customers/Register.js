import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./form.css";

const Register = () => {
  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    job: {
      value: "",
      error: false,
    },
  });

  const handleInputChange = (event) => {
    // Vou pegar o name que chegar no campo, e substituir com o value do campo
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };

  const handleRegisterButton = () => {
    let hasError = false;
    let newFormState = {
      ...form,
    };
    // verificar se os campos estão preenchidos, se não, já exibir um erro logo de cara. se tiver ok, fazer a request para a API

    if (!form.name.value) {
      hasError = true;
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: "Digite o nome do campo corretamente",
      };
    }

    if (!form.job.value) {
      hasError = true;

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: "Digite o nome do campo corretamente",
      };

      if (hasError) {
        return setForm(newFormState);
      }
    }
    axios
      .post("https://reqres.in/api/users", {
        name: form.name.value,
        job: form.job.value,
      })
      .then((response) => {
        console.log("OK", response);
      });
  };

  return (
    <>
      <div className="form">
        <TextField
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ""}
          name="name"
          value={form.name.value}
          onChange={handleInputChange}
          className="inputName"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
        />
        <TextField
          error={form.name.error}
          helperText={form.job.error ? form.name.helperText : ""}
          name="job"
          value={form.job.value}
          onChange={handleInputChange}
          className="inputJob"
          id="outlined-basic"
          label="Profissão"
          variant="outlined"
        />
        <Button
          onClick={handleRegisterButton}
          variant="contained"
          color="primary"
        >
          Cadastrar
        </Button>
      </div>
    </>
  );
};

export default Register;

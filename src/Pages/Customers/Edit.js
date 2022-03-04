import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Toasty from "../../Components/Toasty";
import "./form.css";

const Edit = () => {
  const { id } = useParams();

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

  //
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      const { data } = response.data;
      setForm({
        name: {
          value: data.first_name,
          error: false,
        },
        job: {
          value: data.job,
          error: false,
        },
      });
    });
  }, []);

  console.log(form);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };

  const handleRegisterButton = () => {
    setisLoading(true);
    let hasError = false;
    let newFormState = {
      ...form,
    };

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
      .put(`https://reqres.in/api/users/${id}`, {
        name: form.name.value,
        job: form.job.value,
      })
      .then((response) => {
        setOpenToasty(true);
        setisLoading(false);
      });
  };

  const [openToasty, setOpenToasty] = useState(false);
  const [isLoading, setisLoading] = useState(false);

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
          {isLoading ? "Processando..." : "Salvar Alterações"}
        </Button>
      </div>
      <Toasty
        onClose={() => setOpenToasty(false)}
        severity="success"
        message="Registro atualizado com sucesso!"
        open={openToasty}
      />
    </>
  );
};

export default Edit;

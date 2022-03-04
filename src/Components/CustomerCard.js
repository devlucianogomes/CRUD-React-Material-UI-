import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ModalConfirm from "./ModalConfirm";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

// Passe por props, o que devera ser recebido de informações providas da api
const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  onRemoveCustomer,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleConfirmModal = (id) => {
    onRemoveCustomer(id);
    handleToggleOpenModal();
  };

  const handleRemoveCustomer = () => {
    handleToggleOpenModal();
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={avatar} aria-label="recipe">
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="Editar Cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Excluir" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar não será possivel reverter a operação"
      />
    </>
  );
};

export default CustomerCard;

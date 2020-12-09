import React from "react";
import Form from "./form";
import { addUser } from "./store/actions";
import { connect } from "react-redux";

const AddForm = ({ addUser }) => {
  return (
    <Form
      label="Добавить пользователя"
      onSubmit={(user) => {
        addUser(user);
      }}
    />
  );
};

export default connect(null, { addUser })(AddForm);

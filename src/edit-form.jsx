import React from "react";
import Form from "./form";
import { editUser } from "./store/actions";
import { connect } from "react-redux";
import { getUserById } from "./store/selectors";

const EditForm = ({ userData, editUser }) => {
  return (
    <Form
      label="Изменить пользователя"
      userData={userData}
      onSubmit={(user) => {
        editUser(user);
      }}
    />
  );
};

const mapStateToProps = (state, { id }) => {
  const userData = getUserById(state, id);
  return { userData };
};

export default connect(mapStateToProps, { editUser })(EditForm);

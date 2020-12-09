import React from "react";

import { connect } from "react-redux";

import AddForm from "./add-form";
import EditForm from "./edit-form";
import Bar from "./bar";
import Users from "./users";

import "./App.css";

const App = ({ edit, editUserId }) => {
  return (
    <div className="app">
      {edit ? <EditForm id={editUserId} /> : <AddForm />}
      <Bar />
      <Users />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { edit, editUserId } = state.users;
  return {
    edit,
    editUserId,
  };
};

export default connect(mapStateToProps)(App);

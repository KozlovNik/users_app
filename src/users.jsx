import React from "react";

import { connect } from "react-redux";

import { getUsersByFilters } from "./store/selectors";
import { setEditMode, deleteUser } from "./store/actions";

import "./users.css";

const Users = ({ users, setEditMode, deleteUser }) => {
  return (
    <div className="users">
      {users.map((item) => {
        return (
          <div className="user" key={item.id}>
            <div className="user__left">
              <p className="user__paragraph">email: {item.email}</p>
              <p className="user__paragraph">пароль: {item.password}</p>
              <p className="user__paragraph">телефон: {item.phone}</p>
              <p className="user__paragraph">ФИО: {item.name}</p>
              <p className="user__paragraph">
                Статус пользователя: {item.status}
              </p>
              <p className="user__paragraph">
                Дата создания: {item.dateCreated}
              </p>
              <p className="user__paragraph">
                Дата последнего редактирования редактирования:{" "}
                {item.dateUpdated}
              </p>
            </div>
            <div className="user__right">
              <button
                className="user__button user__button--edit"
                onClick={() => {
                  setEditMode(item.id);
                }}
              >
                РЕДАКТИРОВАТЬ
              </button>
              <button
                className="user__button user__button--delete"
                onClick={() => {
                  deleteUser(item.id);
                }}
              >
                УДАЛИТЬ
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const users = getUsersByFilters(state);
  return { users };
};

export default connect(mapStateToProps, { setEditMode, deleteUser })(Users);

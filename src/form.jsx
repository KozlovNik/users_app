import React, { useState } from "react";
import { connect } from "react-redux";

import "./form.css";

const initial = {
  email: "",
  password: "",
  phone: "",
  name: "",
  status: "client",
};

const Form = ({ onSubmit, label, userData = initial }) => {
  const [user, setUser] = useState(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser(initial);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form__header">{label}</p>
      <input
        className="form__item"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
        required
      />
      <input
        className="form__item"
        type="text"
        name="password"
        placeholder="Пароль"
        required
        value={user.password}
        onChange={handleChange}
      />
      <input
        className="form__item"
        type="text"
        name="phone"
        placeholder="Телефон"
        required
        value={user.phone}
        onChange={handleChange}
      />
      <input
        className="form__item"
        type="text"
        name="name"
        placeholder="ФИО"
        required
        value={user.name}
        onChange={handleChange}
      />
      <select
        name="status"
        className="form__item"
        onChange={handleChange}
        value={user.status}
      >
        <option value="client">client</option>
        <option value="partner">partner</option>
        <option value="admin">admin</option>
      </select>

      <button className="form__button">Сохранить</button>
    </form>
  );
};

export default connect(null)(Form);

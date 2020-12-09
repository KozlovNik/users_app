import React from "react";
import "./bar.css";
import { setFilter, setSearchWord } from "./store/actions";
import { connect } from "react-redux";

const Bar = ({ setFilter, setSearchWord }) => {
  return (
    <div className="bar">
      <div className="bar__wrapper">
        <span className="bar__title">Пользователи</span>
        <div className="fs">
          <label>
            Фильтровать
            <select
              className="fs__search"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <option value="all"></option>
              <option value="client">client</option>
              <option value="partner">partner</option>
              <option value="admin">admin</option>
            </select>
          </label>
          <label>
            Поиск
            <input
              className="fs__filter"
              type="text"
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setFilter, setSearchWord })(Bar);

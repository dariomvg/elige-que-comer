"use client";
import { useState } from "react";
import "../styles/form.css";

const objBase = {
  id: 0,
  title: "",
};


export const Form = ({ addFood, handleActive }) => {
  const [form, setForm] = useState(objBase);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(form);
    setForm(objBase);
    handleActive();
  };

  return (
    <form onSubmit={handleSubmit} className="form-list">
      <p className="close-form" onClick={() => handleActive()}>
        X
      </p>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={(e) => handleChange(e)}
        className="input-form-list"
        placeholder="Agrega tu comida..."
        required
      />
      <button type="submit" className="btn-form-list">
        Agregar
      </button>
    </form>
  );
};

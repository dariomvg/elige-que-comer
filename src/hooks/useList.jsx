"use client";
import { useEffect, useState } from "react";

function generateNumericId() {
  return Math.floor(10000 + Math.random() * 90000);
}

export const useList = () => {
  const [listFoods, setListFoods] = useState([]);
  const [active, setActive] = useState(false);

  const addFood = (data) => {
    if (!data.id) {
      data.id = generateNumericId();
    }
    setListFoods([...listFoods, data]);
  };

  const deleteFood = (id) => {
    setListFoods(listFoods.filter((item) => item.id !== id));
  };

  const handleActive = () => setActive(!active);

  useEffect(() => {
    const storedFoods = localStorage.getItem("foods");
    if (storedFoods) {
      setListFoods(JSON.parse(storedFoods));
    }
  }, []);

  useEffect(() => {
    if (listFoods.length > 0) {
      localStorage.setItem("foods", JSON.stringify(listFoods));
    }
  }, [listFoods]);

  return { listFoods, addFood, active, handleActive, deleteFood };
};

"use client";
import { useChoose } from "@/hooks/useChoose";
import "../styles/chooseFood.css";

export const ChooseFood = () => {
  const { selectedFood, chooseLocalFood, chooseRandomFood, message } =
    useChoose();

  return (
    <section className="section-choose-food">
      <div className="btns">
        <button className="btn" onClick={() => chooseLocalFood()}>
          Elegir aleatorio de tu lista
        </button>
        <button className="btn" onClick={() => chooseRandomFood()}>
          Elegir aleatorio del global
        </button>
      </div>
      {selectedFood.title && (
        <div className="box-title-food">
          {selectedFood.image == null ? (
            <p>Comida elegida:</p>
          ) : (
            <img
              src={`${selectedFood.image}`}
              alt={selectedFood.title}
              width="100%"
              height="auto"
            />
          )}
          <h1 className="title-food">{selectedFood.title}</h1>
          {selectedFood.instructions !== null && (
            <p>{selectedFood.instructions}</p>
          )}
        </div>
      )}
      {message && <strong className="title-message">{message}</strong>}
    </section>
  );
};

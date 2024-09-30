"use client";
import { useList } from "@/hooks/useList";
import "./lista.css";
import { Form } from "@/components/Form";
import Link from "next/link";
import iconAdd from "../../assets/add-circle.svg";

export default function lista() {
  const { listFoods, addFood, active, handleActive, deleteFood } = useList();

  return (
    <section className="section-list">
      {active && <Form addFood={addFood} handleActive={handleActive} />}
      {listFoods.length > 0 ? (
        <section className="section-list-foods">
          <div className="header-list-foods">
            <h2>Tus comidas</h2>
            <button className="icon-add">
              <img
                src={iconAdd.src}
                alt="add circle"
                width={30}
                height={30}
                onClick={() => handleActive()}
              />
            </button>
          </div>
          <section className="list-foods">
            {listFoods.map((item) => (
              <div className="card-list-food" key={item.id}>
                <strong className="title-card">{item.title}</strong>
                <button
                  className="delete-card"
                  onClick={() => deleteFood(item.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </section>
        </section>
      ) : (
        <section className="section-add">
          <div className="box-add-form">
            <h3 className="title-add">Agrega tus propias comidas...</h3>
            <button onClick={() => handleActive()} className="btn-add">
              agregar
            </button>
          </div>
          <p>ó</p>
          <div className="box-add-visit">
            <h3 className="title-visit">busca otras comidas aquí</h3>
            <Link href="/comidas" className="link-visit">
              otras comidas
            </Link>
          </div>
        </section>
      )}
    </section>
  );
}

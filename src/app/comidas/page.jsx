"use client";
import { useFoods } from "@/hooks/useFoods";
import "./comidas.css";
import { useList } from "@/hooks/useList";

export default function comidas() {

  const { foods, getUniqueFood, getCategoryFood, selectFood, setSelectFood, changePage, pages} = useFoods();
  const {addFood} = useList();


  const createAndAddFood = (item) => {
    const newFood = {
      id: item.id,
      title: item.strMeal
    }
    addFood(newFood)
  }

  const submitSearchFood = (e) => {
    e.preventDefault(); 
    getUniqueFood(selectFood);
    setSelectFood(""); 
  }

  const changeCategory = (e) => {
    const category = e.target.value;
    if (category) {
      getCategoryFood(category); 
    } else {
      getCategoryFood(""); 
    }
  };

  return (
    <section className="section-foods">
      <h1>Lista de comidas</h1>
      <section className="form-foods">
        <div className="box-select">
          <p className="title-select">Filtrar por</p>
          <select name="category" id="foods" className="select" onChange={changeCategory} >
            <option value="Beef">Todas</option>
            <option value="Vegetarian">Vegetariano</option>
            <option value="Vegan">Vegano</option>
            <option value="Breakfast">Desayuno</option>
            <option value="Dessert">Postres</option>
            <option value="Pasta">Pastas</option>
            <option value="Beef">Carne</option>
            <option value="Chicken">Pollo</option>
          </select>
        </div>
        <form className="box-search" onSubmit={submitSearchFood}>
          <input
            type="text"
            placeholder="Busca tus comidas..."
            className="input-search"
            name="food"
            value={selectFood}
            onChange={(e) => setSelectFood(e.target.value)}
          />
          <button className="btn-search" type="submit">
            Buscar
          </button>
        </form>
      </section>
  
      <section className="cards-food">
        {foods.length > 0 &&
          foods.slice(0, pages).map((item) => (
            <div key={item.idMeal} className="card-food">
              <h3 className="title-card-food">{item.strMeal}</h3>
              <button className="btn-card-food" onClick={() => createAndAddFood(item)}>Agregar a tu lista</button>
            </div>
          ))} 
      </section> 
      
      <section className="section-pagination">
        <button className="page" onClick={() => changePage()}>Más comidas</button>
      </section>
    </section>
  );
}

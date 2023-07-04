import { useState, useEffect } from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

import pizzas from "../pizzas.json";


export const Home = () => {
const [items, setItems] = useState([])
const [isLoading, SetIsLoading] = useState(true)

//емуляция фетча, ожидание сервера 1с для просмотра скелетона
useEffect(() => {
  setTimeout(() => {
    setItems(pizzas)
    SetIsLoading(false)
  }, 1000);
}, [])
  return (
    <>
    <div className="content__top">
           <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />) 
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />) }
          </div>
    </>
    
  )
}

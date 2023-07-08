import { useState, useEffect } from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

// import pizzas from "../pizzas.json";


export const Home = ({ searchText }) => {
const [items, setItems] = useState([])
const [isLoading, SetIsLoading] = useState(true)
const [activeIndex, setActiveIndex] = useState(0)
const [selectedSort, setSelectedSort] = useState({
  name: 'популярности(убыв)',
  sortProperty: 'rating'
})


useEffect(() => {
  SetIsLoading(true)

  const sortBy = selectedSort.sortProperty.replace('-', '');
  const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = activeIndex > 0 ? `category=${activeIndex}` : '';

  fetch(`https://64a5eb7500c3559aa9c046a9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
  .then(res => res.json())
  .then(arr => {
    setItems(arr)
    SetIsLoading(false)
  })
  window.scrollTo(0, 0);
}, [activeIndex, selectedSort])

  return (
  <>
    <div className="content__top">
      <Categories value={activeIndex} onClickIndex={(i) => setActiveIndex(prev => prev = i)} />
      <Sort value={selectedSort} onSelectedSort={(i) => setSelectedSort(prev => prev = i)} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading 
      ? [...new Array(12)].map((_, index) => <Skeleton key={index} />) 
      : items.filter(obj => obj.title.toLowerCase().includes(searchText.toLowerCase())).map((obj) => <PizzaBlock key={obj.id} {...obj} />) }
    </div>
  </>
    
  )
}

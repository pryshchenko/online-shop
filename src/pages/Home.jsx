import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSelectedSort } from "../redux/slices/filterSlice";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
const categoryId = useSelector(state => state.filter.categoryId)
const searchText = useSelector(state => state.filter.searchText)
const selectedSort = useSelector(state => state.filter.sort)

const dispatch = useDispatch()

const [items, setItems] = useState([])
const [isLoading, SetIsLoading] = useState(true)



useEffect(() => {
  SetIsLoading(true)

  const sortBy = selectedSort.sortProperty.replace('-', '');
  const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  fetch(`https://64a5eb7500c3559aa9c046a9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
  .then(res => res.json())
  .then(arr => {
    setItems(arr)
    SetIsLoading(false)
  })
  window.scrollTo(0, 0);
}, [categoryId, selectedSort])

  return (
  <>
    <div className="content__top">
      <Categories value={categoryId} onClickIndex={(i) => dispatch(setCategoryId(i)) } />
      <Sort value={selectedSort} onSelectedSort={(obj) => dispatch(setSelectedSort(obj)) } />
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

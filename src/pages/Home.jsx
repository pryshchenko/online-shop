import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSelectedSort, setCurrentPage } from "../redux/slices/filterSlice";
import axios from "axios";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

export const Home = () => {
  
const { categoryId, searchText, selectedSort, currentPage } = useSelector(state => state.filter)

const dispatch = useDispatch()

const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)

const onChangePage = number => {
  dispatch(setCurrentPage(number))
}


useEffect(() => {
  setIsLoading(true)

  const sortBy = selectedSort.sortProperty.replace('-', '');
  const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchText ? `search=${searchText}` : '';

  axios.get(`https://64a5eb7500c3559aa9c046a9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`)
  .then(res => {
    setItems(res.data)
    setIsLoading(false)
  })
  
  window.scrollTo(0, 0);
}, [categoryId, selectedSort, searchText, currentPage])

  return (
  <>
    <div className="content__top">
      <Categories value={categoryId} onClickIndex={(i) => dispatch(setCategoryId(i)) } />
      <Sort value={selectedSort} onSelectedSort={(obj) => dispatch(setSelectedSort(obj)) } />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading 
      ? [...new Array(4)].map((_, index) => <Skeleton key={index} />) 
      : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />) }
    </div>
    <Pagination currentPage={currentPage} onChangePage={onChangePage}/> 
  </>
    
  )
}

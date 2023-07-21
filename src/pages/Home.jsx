import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { pizzaFetch } from '../redux/slices/pizzaSlice'
import { setCategoryId, setSelectedSort, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { listSort } from '../components/Sort'

export const Home = () => {
  
const { categoryId, searchText, selectedSort, currentPage } = useSelector(state => state.filter)
const { items, status } = useSelector(state => state.pizza)
const dispatch = useDispatch()
const navigate = useNavigate()

const isSearch = useRef(false);
const isMounted = useRef(false);

const onChangePage = number => {
  dispatch(setCurrentPage(number))
}

const getPizzas = () => {
  const sortBy = selectedSort.sortProperty.replace('-', '');
  const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchText ? `search=${searchText}` : '';

  dispatch(pizzaFetch({
    sortBy,
    order,
    category,
    search,
    currentPage,
  }))

  window.scrollTo(0, 0);
}

useEffect(() => {
  if (isMounted.current) {
    const queryString = qs.stringify({
      sortProperty: selectedSort.sortProperty,
      categoryId,
      currentPage,
      searchText
    });

    navigate(`?${queryString}`);
  }
  isMounted.current = true;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [categoryId, selectedSort.sortProperty, searchText, currentPage])

  useEffect(() => {
  if (window.location.search) {
    const params = qs.parse(window.location.search.substring(1));
    const selectedSort = listSort.find((obj) => obj.sortProperty === params.sortProperty);
    dispatch(
      setFilters({
        ...params,
        selectedSort,
      }),
    );
    isSearch.current = true;
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  useEffect(() => {
  if (!isSearch.current) {
    getPizzas();
  }

  isSearch.current = false;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [categoryId, selectedSort.sortProperty, searchText, currentPage]);

  return (
  <>
    <div className="content__top">
      <Categories value={categoryId} onClickIndex={(i) => dispatch(setCategoryId(i)) } />
      <Sort value={selectedSort} onSelectedSort={(obj) => dispatch(setSelectedSort(obj)) } />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {status === 'loading' 
      ? [...new Array(4)].map((_, index) => <Skeleton key={index} />) 
      : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />) }
    </div>
    <Pagination currentPage={currentPage} onChangePage={onChangePage}/> 
  </>
    
  )
}

import { Link } from 'react-router-dom';
import styles from './FinishShopping.module.scss'
import { useDispatch } from 'react-redux';
import { setFinishShopping } from '../../redux/slices/cartSlice'

const FinishShopping = () => {

const dispatch = useDispatch()
const resetCart = () => {
  dispatch(setFinishShopping(false))
}

  return (
    <div className={styles.finish}>
      <h2>Дякую за замовлення!<icon>😊</icon></h2>
      <p>За хвилину ви отримаєте Ваше замовлення!</p>
      <img src="img\finish-shopping.png" alt="Empty cart" />
      <Link onClick={resetCart} to="/pizza-shop" className={styles.button}>
      <span>Повернутися на головну</span>
      </Link>
    </div>
  )
}

export default FinishShopping;
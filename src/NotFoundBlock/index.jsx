import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className="cart cart--empty">
      <h2 className={styles.root} >Нічого не знайдено<icon>😕</icon></h2>
      <Link to="/pizza-shop" class="button button--black">
      <span>Повернутися на головну</span>
      </Link>
    </div>
  );
}
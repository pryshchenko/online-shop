import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className="cart cart--empty">
      <h2 className={styles.root} >Ничего не найденно<icon>😕</icon></h2>
      <a href="/" class="button button--black">
      <span>Вернуться назад</span>
      </a>
    </div>
  );
}
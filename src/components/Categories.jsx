    export const Categories = ({ value, onClickIndex }) => {
    const categories  = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']
    return (
    <div className="categories">
    <ul>
      {
      categories.map((categorie, index) => (
          <li key={index} className={value === index ? 'active' : ''} onClick={() => onClickIndex(index)}>
            {categorie}
          </li>
        ))
      }
    </ul>
    </div>
  );
}

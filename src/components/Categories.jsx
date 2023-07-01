  import { useState } from "react";
  export const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    
    const categories  = ['Все', 'Мясные', 'Вегетарианская', 'Даниловская', 'Острая']

    const selectActiveIndex = (index) => {
        setActiveIndex(prev => prev = index)
    }

    return (
    <div className="categories">
    <ul>
      {
      categories.map((categorie, index) => (
          <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => selectActiveIndex(index)}>
            {categorie}
          </li>
        ))
      }
    </ul>
    </div>
  );
}

import { useState } from "react";

export const PizzaBlock = ({title, price, imageUrl, types, sizes}) => {
  const typeNames = ['тонкое', 'традиционное']
  const [amount, setAmount] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const [typeName, setTypeName] = useState(0)
  return (
    <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{title}</h4>
  <div className="pizza-block__selector">
    <ul>
      {types.map((type, i) => (
      <li key={i} onClick={() => setTypeName(prev => prev = type)} className={typeName === i ? 'active' : ''}>{typeNames[type]}</li>
      ))}

    </ul>
    <ul>
      {sizes.map((size, i) => (
        <li key={i} onClick={() => setActiveSize(prev => prev = i)} className={activeSize === i ? 'active' : ''}>{size} см.</li>
      ))}
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">{price} ₴</div>
    <button className="button button--outline button--add" onClick={() => setAmount(prev => prev + 1)}>
      <span>Добавить</span>
      <i>{amount}</i>
    </button>
    {amount ? <button className="button button--outline button--add" onClick={() => setAmount(prev => prev - 1)}>
      <span>Убрать</span>
    </button> : null}
  </div>
</div>
  );
}
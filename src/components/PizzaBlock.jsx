import { useState } from "react";

const PizzaBlock = ({name, cost, ...all}) => {
  let [amount, setAmount] = useState(0)
  
  return (
    <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{name}</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">{cost} ₴</div>
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

export default PizzaBlock;
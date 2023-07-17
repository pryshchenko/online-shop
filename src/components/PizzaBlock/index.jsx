import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../redux/slices/cartSlice'

const typeNames = ['тонкое', 'традиционное']

export const PizzaBlock = ({title, price, imageUrl, types, sizes, id}) => {
  const [activeSize, setActiveSize] = useState(0)
  const [typeName, setTypeName] = useState(0)

  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
  
  const addedCount = cartItem ? cartItem.count : 0;
 
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[typeName],
      size: sizes[activeSize],
    }
    dispatch(addItem(item))
  }

  const onClickRemove = () => {
    dispatch(removeItem(id))
  } 

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
    <button className="button button--outline button--add" onClick={onClickAdd}>
      <span>Добавить</span>
        {addedCount > 0 && <i>{addedCount}</i>}
    </button>
    {addedCount ? <button className="button button--outline button--add" onClick={onClickRemove}>
      <span>Убрать</span>
    </button> : null}
  </div>
</div>
  );
}
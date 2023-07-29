export const getCartFromLS = () => {
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  const totalPrice = items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)

  return {
    items,
    totalPrice,
  }
}
let shoppingCart = {
    items: [],
    addItem: function(item) {
      this.items.push(item);
    }
  };
  
  function addNewItemToCart(cart, newItem) {
    cart.addItem(newItem);
  }
  
  
  let newItem = {
    name: 'New Item',
    price: 10.99,
    quantity: 1
  };
  
  addNewItemToCart(shoppingCart, newItem);
  console.log(shoppingCart.items);
  
function clearCart() {
  cartproducts = [];
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  printCartCards(cartproducts, "productscart");
  printCartTotal(cartproducts, "total");
}

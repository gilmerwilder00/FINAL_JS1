hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
if (!cartproducts) {
  cartproducts = [];
}
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");

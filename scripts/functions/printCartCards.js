function printCartCards(arrayOfProducts, id) {
  let cartTemplates = "";
  const selector = document.getElementById(id);
  if (arrayOfProducts.length > 0) {
    for (const element of arrayOfProducts) {
      cartTemplates = cartTemplates + createCartCard(element);
    }
    selector.innerHTML = cartTemplates;
  } else {
    selector.innerHTML = `
    <article class="product-cart">
      <strong class="product-title" style='width: 100%; text-align: center'>No hay productos en el carrito</strong>
    </article>
  `;
  }
}

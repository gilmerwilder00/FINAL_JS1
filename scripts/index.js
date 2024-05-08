printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

printProductCards(products, "products");

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", printFilter);

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
printDetails(id);

const onsale = products.filter((each) => each.onsale);
printProductCards(onsale, "product-container");

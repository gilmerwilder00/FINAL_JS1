import { hideSearch, printIcons, printNavBar, printFooter, options } from "./functions/printLayout.js";
import { printDetails } from "./functions/printDetails.js";
import { printProductCards } from "./functions/printProductCards.js";
import { products } from "./products.js";



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

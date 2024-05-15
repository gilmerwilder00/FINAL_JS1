import { clearCart} from "./buyProducts.js";

export function printCartTotal(arrayOfProducts, id) {
  let total = 0;

  // arrayOfProducts.forEach(
  //   (each) => (total = total + each.price * each.quantity)
  // );

  //  Total with reduce 

  total = arrayOfProducts.reduce(
    (acc , actProduct) =>  acc + actProduct.price * actProduct.quantity ,
    0
  );

  // total = arrayOfProducts.reduce(
  //   (acc, actProduct) =>  acc + actProduct.price * actProduct.quantity
  // , 0 );


  const template = `
     <div class="cart-resume">
       <div class="cart-data">
         <h2 class="cart-title"><span>Resumen</span><span>del</span><span>pedido</span></h2>
         <div class="cart-total">
           <h3>Total</h3>
           <strong class="cart-price">${total}</strong>
         </div>
         <small class="cart-tax">Incluye impuesto PAIS y percepción AFIP.</small>
       </div>
       <button class="cart-btn" id="buy" type="button">COMPRAR</button>
   </div>`;
  const selector = document.getElementById(id);
  selector.innerHTML = template;
  const buySelector = document.getElementById("buy");
  buySelector.addEventListener("click", clearCart);
}

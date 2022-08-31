

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
/* console.log(calcularPrecioConDescuento(120, 15)); */

const coupons = ["Iphone", "Huawei", "S20",];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; /* Del elemento inputPrice con el id InputPrice vamos a traer el valor que generan los usuarios*/

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
    break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
    break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
    break;
    }

    const preciosConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + preciosConDescuento;
}















/* const precioOriginal = 120; EJEMPLO CENSILLO DE PORSENTAJE. DESCOMENTAR PARA VER
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
 */
/* console.log("El precio original es " + precioConDescuento); */
/* console.log(`El precio original es ${precioConDescuento}`); */
/* console.log({ forma de imprimir las propiedades de un objeto
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}) */
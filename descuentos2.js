
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
/* console.log(calcularPrecioConDescuento(120, 15)); */

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; /* Del elemento inputPrice con el id InputPrice vamos a traer el valor que generan los usuarios*/

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }

    const preciosConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + preciosConDescuento;
}



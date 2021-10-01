let price = document.getElementById("price");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

let price1 = document.getElementById("bagPrice");
let op = document.getElementById("opt");
price.innerHTML = `Rs.1999`;
discount.innerHTML = `Rs.0`;
total.innerHTML = `Rs1999`;
let dis2 = 1999;
let val1 = 0;
let to = 1999;
op.onchange = function () {
  let x = op.value;
  price1.innerHTML = `Rs.${x * 1999}`;

  price.innerHTML = `Rs.${x * 1999}`;

  discount.innerHTML = `Rs.${x * 0}`;
  let val = `${x * 1999}`;
  let dis = `${x * 0}`;
  dis2 = x * 0;
  val1 = x * 0;
  to = val1 - dis;
  total.innerHTML = `Rs.${val - dis}`;
};

function couponApply() {
  let coupon = document.getElementById("text3").value;
  if (coupon === "masai30") {
    discount.innerHTML = dis2 - 1000;
    total.innerHTML = to - 1000;
  }
}


let count = document.getElementById("product-basket__count-count");

document.getElementById("product-basket__count-add").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 10){
    count.innerHTML++;
    let countPlus = count.innerHTML;

  }
}

document.getElementById("product-basket__count-minus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
  }
}

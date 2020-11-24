

//-------Format Price--------//

const formatPrice = (total) => {
  total = total.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(total))
      total = total.replace(pattern, "$1,$2");
  return '$' + total;
}

//-----Left Click Handler-----//

  const goLeft = () => {

}

//-----Right Click Handler-----//

const goRight = () => {

}


module.exports.formatPrice = formatPrice;
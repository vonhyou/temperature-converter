function convert_deg(type) {
  return type ? deg => (deg - 32) * 5 / 9 : deg => deg * 9 / 5 + 32;
}

function validate_deg(deg) {
  const number_reg = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;

  if (!number_reg.test(deg)) {
    alert("Input a number please");
    return false;
  }
}

function calc_degree() {
  const deg = document.forms.convertor.degree.value;
  
  if (validate_deg(deg))
    return false;

  const deg_type = 
    document.forms.convertor.type.value == "fah" ? true : false;

  console.log(convert_deg(deg_type)(deg));
  document.getElementById("result").innerHTML = convert_deg(deg_type)(deg);
  document.getElementById("unit").innerHTML = deg_type ? ' ˚C' : ' ˚F';
}
function showSubnav() {
    var subnav = document.getElementById("subnav-cart-checkout");
    if (subnav.style.display === "none") {
        subnav.style.display = "block";
    } else {
        subnav.style.display = "none";
    }
  }
function getRandNumbers(min, max, length) {
    var arr=[];
    for (var i = 0; i < length; i++) {
        arr[i] = Math.random() * (max - min) + min;
    }
    return arr
}
var test =new getRandNumbers (1,50,1)
 console.log(test)
 
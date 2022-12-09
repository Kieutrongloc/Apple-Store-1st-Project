// HIDE/UNHIDE CARD CHECKOUT
function showSubnav() {
    var x = document.getElementById("subnav-cart-checkout");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// SELECT VALUE TO CART BUTTON
const btn = document.querySelectorAll("i.nav-item-add")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
  var btnItem = event.target
  var product = btnItem.parentElement
  var productImg = product.querySelector("img").src
  var productName = product.querySelector(".accessories-nav-item-name, .devices-nav-item-name").innerText
  var productPrice = product.querySelector(".accessories-nav-item-price, .devices-nav-item-price").innerText
  var productPriceNumber = productPrice.replace(/\D/g, "")/100;
  // console.log(productPriceNumber, productImg, productName)
  addcart(productImg, productName,productPrice,productPriceNumber)
}})
})

// ADD VALUE SELECTED TO CART
function addcart(productImg, productName,productPrice,productPriceNumber) {
  var addtr = document.createElement("div")
  addtr.classList.add("subnav-item-list")

  var trcontent = '<div style="display: flex;justify-content: space-between;padding-bottom: 10px;" class="subnav-item-list"><img src="'+productImg+'" alt="" class="checkout-item-img"><div class="cart-checkout-item-list"><div style="display: flex;"><p style="color:black" class="checkout-item-name">'+productName+'</p></div><div style="display: flex;justify-content: space-between;"><input style="max-width: 40px;" type="number" value="1" min="1" class="checkout-item-qtt"><p style="color:black" class="checkout-item-price"><span>$</span><span class="checkout-item-pricenumber">'+productPriceNumber+'</span><span>.00</span></p></div></div><p style="color:red;margin: 20px 0px;cursor: pointer;" class="check-item-remove">Remove</p></div>'

  addtr.innerHTML = trcontent
  var cartTable = document.querySelector(".cart-checkout-table-item")
  // console.log(addtr)
  cartTable.append(addtr)
  cartTotal()
}

// CACULATE TOTAL PRICE/REMOVE ITEM
// TOTAL PRICE

function cartTotal (){
  var cartItem = document.querySelectorAll(".cart-checkout-item-list")
  var totalPriceCart = 0
  // console.log(cartItem.length)
  for (var i=0;i<cartItem.length;i++) {
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".checkout-item-pricenumber").innerHTML
    var totalPriceUnit = inputValue*productPrice
    totalPriceCart = totalPriceCart+totalPriceUnit
  }
  var cartTotal = document.querySelector(".subnav-checkout-total-number")
  console.log(cartTotal)
}


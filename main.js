// HIDE/UNHIDE NAV MENU IN MOBILE RESPONSIVE (NOT DONE)
function showNavmenu() {
  var x = document.querySelectorAll(".nav-res-mobile-hide");
  for (var i=0;i<x.length;i++) {
  if (x[i].style.display === "none") {
    x[i].style.display = "block";
  } else {
    x[i].style.display = "none";
  }}
}


// HIDE/UNHIDE CARD CHECKOUT
function showSubnav(event) {
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
  addcart(productImg, productName, productPrice, productPriceNumber)
}})
})

// ADD VALUE SELECTED TO CART
function addcart(productImg, productName,productPrice,productPriceNumber) {
  var addtr = document.createElement("div")
  var cartItem = document.querySelectorAll(".subnav-item-list")
  // addtr.classList.add("subnav-item-list")
  
  for (var i=0;i<cartItem.length;i++) {
    var productNewAdd = document.querySelectorAll(".checkout-item-name")
    var productQuantity = document.querySelector(".checkout-item-qtt").value
    // console.log(productQuantity)
    if (productNewAdd[i].innerHTML == productName) {
      alert(""+productName+" has been added already. Please update the quantity in your cart!") 
      return
    }
  }

  var trcontent = '<div style="display: flex;justify-content: space-between;padding-bottom: 10px;" class="subnav-item-list"><img src="'+productImg+'" alt="" class="checkout-item-img"><div class="cart-checkout-item-list"><div style="display: flex;"><p style="color:black" class="checkout-item-name">'+productName+'</p></div><div style="display: flex;justify-content: space-between;"><input style="max-width: 40px;" type="number" value="1" min="1" class="checkout-item-qtt"><p style="color:black" class="checkout-item-price"><span>$</span><span class="checkout-item-pricenumber">'+productPriceNumber+'</span><span>.00</span></p></div></div><p style="color:red;margin: 20px 0px;cursor: pointer;" class="checkout-item-remove">Remove</p></div>'

  addtr.innerHTML = trcontent
  var cartTable = document.querySelector(".cart-checkout-table-item")
  cartTable.append(addtr)
  cartTotal()
  deleteCart()
}

// CACULATE TOTAL PRICE/REMOVE ITEM
// TOTAL PRICE

function cartTotal (){
  var cartItem = document.querySelectorAll(".cart-checkout-item-list")
  var totalPriceCart = 0
  for (var i=0;i<cartItem.length;i++) {
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".checkout-item-pricenumber").innerHTML
    var totalPriceUnit = inputValue*productPrice
    totalPriceCart = totalPriceCart + totalPriceUnit
    inputChange()
    bagQuanity()
  }
  var cartTotal = document.querySelector(".subnav-checkout-total-number")
  cartTotal.innerHTML = "Total: $" + totalPriceCart +".00"
  
}


 // (CACULATE TOTAL ITEMS AT "BAG")
 function bagQuanity() {
   var cartItem = document.querySelectorAll(".cart-checkout-item-list")
   var cartItematbag = document.querySelector(".cart-quantity-at-bag")
   var productQuantity = 0
   for (var i=0;i<cartItem.length;i++) {
    var cartItemQuantity = document.querySelector(".checkout-quantity")
   var inputValue = Number(cartItem[i].querySelector("input").value)
   productQuantity = inputValue + productQuantity
  //  console.log(typeof inputValue)
   cartItemQuantity.innerHTML = " (" + productQuantity + ")"
   cartItematbag.innerHTML = productQuantity
   }
   inputChange()
 }


// Delete item from checkout cart
function deleteCart() {
  var cartItem = document.querySelectorAll(".subnav-item-list")
  for (var i=0;i<cartItem.length;i++) {
    var removeButton = document.querySelectorAll(".checkout-item-remove")
    removeButton[i].addEventListener("click",function(event){
      var cartDelete = event.target
      var cartItemRemove = cartDelete.parentElement
      cartItemRemove.remove()
      cartTotal()
      
      // console.log(cartItemRemove)
    })   
  }
}

function inputChange() {
  var cartItem = document.querySelectorAll(".subnav-item-list")
  for (var i=0;i<cartItem.length;i++) {
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
      cartTotal()
    })
  }
}




// REFERENCE
// + Ngay sau khi tạo <tr>  mới trong <tbody>
//    nên add ngay event "Click" cho button Xóa trong  <tr> mới tạo ra, như thế đỡ tạo lại vòng lập check thẻ <tr>  ?
//   ============================
// function addcart(productPrice, productImg, productName) {
//   // Xử lý thêm <Tr> cho <Tbody>
//   var addtr = document.createElement("tr");
//   var cartItem = document.querySelectorAll("tbody tr");
//   for (var i = 0; i < cartItem.length; i++) {
//     var itemName = cartItem[i].querySelector(".item_name").innerHTML;
//     if (itemName == productName) {
//       alert("Sản phẩm 「" + productName + "」 bạn chọn đã có trong giỏ hàng !");
//       return;
//     }
//   }
//   var trContent =
//     "<tr>" +
//     '<td style="display: flex; align-items: center;"><img style="width:100px;" src="' +
//     productImg +
//     '" alt="Iphone thumb"><span class="item_name">' +
//     productName +
//     "</span>" +
//     "</td>" +
//     "<td>" +
//     "<p>" +
//     '<span class="item_price">' +
//     productPrice +
//     "</span>" +
//     "<sub>đ</sub>" +
//     "</p>" +
//     "</td>" +
//     "<td>" +
//     '<input class="item_quantity" style="width:30px; outline:none;" type="number" value="1" min="1">' +
//     "</td>" +
//     '<td style="cursor: pointer"><span class="item_delete">Xóa</span></td>' +
//     "</tr>";
//   addtr.innerHTML = trContent;
//   var cartTable = document.querySelector("tbody");
//   cartTable.append(addtr);

//   // move đến thẻ <tr> mới tạo ra

//   var lastTr = cartTable.lastElementChild;

//   // Xử lý event cho button 'xóa' 
//   var itemDelete = lastTr.querySelector(".item_delete");
//   itemDelete.addEventListener("click", function (event) {
//     var target = event.target;
//     var targetTr = target.parentElement.parentElement;
//     targetTr.remove();
//    // Reset lại giá tổng
//     cartTotal();
//   });

//   // Xử lý event update số lượng sản phẩm
//   var quantityChange = lastTr.querySelector(".item_quantity");
//   quantityChange.addEventListener("change", function (event) {
//    // Reset lại giá tổng
//     cartTotal();
//   });

//   // Tính tổng giá tiền
//   cartTotal();
// }
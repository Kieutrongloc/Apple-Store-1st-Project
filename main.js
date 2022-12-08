// function showSubnav() {
//     var subnav = document.getElementById("subnav-cart-checkout");
//     if (subnav.style.display === "none") {
//         subnav.style.display = "block";
//     } else {
//         subnav.style.display = "none";
//     }
//   }

//   function getTotal(arr) {
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }


function run(object) {
    var arr = [];
    for (var key in object){
        arr.push("Thuộc tính " + key + " có giá trị " + object[key]);
    }
    return arr;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));

var x = 0;
setInterval(function() {
    const addactive = document.querySelectorAll('.thumbnail__slide');
    const addclass = addactive[x].classList;
    addclass.add('active');
    x = x + 1;
    if (x == 1) {
        const delendclass = addactive[x + (addactive.length - 2)];
        delendclass.classList.remove('active');
    }
    const removeclass = addactive[x - 2].classList;
    removeclass.remove('active');
    if (x >= addactive.length) {
        x = 0;
    }
}, 3000);

function slider(title, price, imgSrc) {

    return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <i class="fas fa-trash-o cart-remove"></i>
</div>
  `;
}
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(246px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(256px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3676px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3666px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3656px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3646px, 0px, 0px)";

document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-411px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-401px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-391px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-381px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-371px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-4304px, 0px, 0px)";

document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1068px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1058px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1048px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1038px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1028px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1018px, 0px, 0px)";

document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1725px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1715px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1705px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1695px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1685px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-1675px, 0px, 0px)";

document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2382px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2372px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2362px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2352px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2342px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2332px, 0px, 0px)";

document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(904px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3029px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3019px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-3009px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2999px, 0px, 0px)";
document.getElementById(menuName).style = "min-width: 647px;max-width: 647px;transform: translate3d(-2989px, 0px, 0px)";
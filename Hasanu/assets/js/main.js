// 
// 
// 
// ------------------------------booking----------------------
// 
// 
// 
const bookBtns = document.querySelectorAll('.js-booking')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeBtn = document.querySelector('.js-modal-close')

function showBooking() {
    modal.classList.add('open')
}
for (const bookBtn of bookBtns) {
    bookBtn.addEventListener('click', showBooking)
}
closeBtn.addEventListener('click', closeBuytickets)
modal.addEventListener('click', closeBuytickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

function closeBuytickets() {
    modal.classList.remove('open')
}
//--------------------------------------------------------- 
// 
// 
//-------------------------add Cart------------------------
// 
// 
//---------------------------------------------------------- 
const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
    loadContent();

}

function loadContent() {
    //Xóa món trong giỏ hàng
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });


    //Product Item Change Event
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty);
    });


    //Product Cart
    let cartBtns = document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn) => {
        btn.addEventListener('click', addCart);
    });

    updateTotal();
}

//Xóa món
function removeItem() {
    if (confirm('Bạn muốn xóa món này chứ.')) {
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter(el => el.title != title);
        this.parentElement.remove();
        loadContent();
    }
}

//Thay đổi số lượng 
function changeQty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadContent();
}

let itemList = [];

//Thêm vào giỏ hàng
function addCart() {
    let food = this.parentElement;
    let foodimg = this.parentElement.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc = foodimg.querySelector('.food-img').src;
    let newProduct = { title, price, imgSrc };

    //Kiểm tra xem  món có trong giỏ chưa
    if (itemList.find((el) => el.title == newProduct.title)) {
        alert("Món Này đã có sẵn trong giỏ hàng bạn vào thêm số lượng nhé <3");
        return;
    } else {
        itemList.push(newProduct);
    }


    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}


function createCartProduct(title, price, imgSrc) {

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

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;

    cartItems.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("K", ""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = (price * qty * 1000).toLocaleString() + 'đ';
    });

    totalValue.innerHTML = (total * 1000).toLocaleString() + 'đ';

    // hiển thị số lượng món hiện có trên icon giỏ hàng
    const cartCount = document.querySelector('.cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if (count == 0) {
        cartCount.style.display = 'none';
    } else {
        cartCount.style.display = 'block';
    }
}
//submitbtnjs
// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let username = document.getElementById("username");
//     let password = document.getElementById("password");

//     if (username.value == "" || password.value == "") {

//     } else {}
// });
// -------------------
// $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value & amp; amp; gt; 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//     $input.val(value);

// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value & amp; amp; lt; 100) {
//         value = value + 1;
//     } else {
//         value = 100;
//     }

//     $input.val(value);
// });
//----------------

// order food
const btnOrder = document.querySelector('.js-buy');
const incart = document.querySelector('.cart');
const orderItems = document.querySelectorAll('.cart-box');

btnOrder.addEventListener('click', () => {
    console.log('btn order', incart);
    console.log('orderItems', orderItems);
});
//
// -----------feedback----------------
var feedbackForm = function(e) {
    var form = (e.target) ? e.target : e.srcElement;
    if (form.name.value == "") {
        alert("Bạn chưa nhập tên");
        form.name.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
    if (form.email.value == "") {
        alert("Vui lòng nhập email");
        form.email.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
    if (form.message.value == "") {
        alert("Hãy để lại lời nhắn cho chúng tôi.");
        form.message.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
};
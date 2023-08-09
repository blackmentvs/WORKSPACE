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
//  --------------------order food ------------------
const btnOrder = document.querySelector('.js-buy');

const odname = document.getElementById('ordername').value;
const odphone = document.getElementById('orderphone').value;
const odemail = document.getElementById('orderemail').value;
const odaddress = document.getElementById('orderaddress').value;
const odmessage = document.getElementById('ordermess').value;

function submitBuy() {
    const data = {
        name: odname,
        phone: odphone,
        email: odemail,
        address: odaddress,
        message: odmessage
    }
}


// ----------------------feedback---------------------
function submitfeedback() {
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const rating = document.getElementById('rating').length;
    const message = document.getElementById('feedback-message').value;
    console.log(rating);

    const data = {
        name: name,
        email: email,
        rating: rating,
        message: message
    }
    console.log(data);
}

const btnFeedback = document.querySelector('.submit--btn');
btnFeedback.addEventListener('click', () => {
    var formData = new FormData(document.querySelector('form'));
    console.log("formData: ", formData);

    function submitFormfeedback() {
        const name = document.getElementById('feedback-name').value;
        const message = document.getElementById('feedback-message').value;
        const rating = document.getElementById('rating').value;
        const email = this.options.emailField ? document.getElementById('feedback-email').value : undefined;

        const data = {
            name: name,
            email: email,
            rating: rating,
            message: message
        }
        console.log("data: ", data);
    }
});
// Menu option
function menu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    gridlinks = document.getElementsByClassName("grid");
    for (i = 0; i < x.length; i++) {
        tablinksgridlinks[i].className = gridlinks[i].className.replace("menu__container", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " wide";
}
document.getElementById("menu").click();
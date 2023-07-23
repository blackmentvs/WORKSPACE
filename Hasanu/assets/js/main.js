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
//----------------------------add Cart----------------------
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
    if (confirm('Bạn muốn xóa món này chứ. ')) {
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
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc = food.querySelector('.food-img');
    console.log('in', food.querySelector('.food-img'));



    let newProduct = { title, price, imgSrc }

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
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = (price * qty * 1000).toLocaleString() + 'đ';

    });

    totalValue.innerHTML = (total * 1000).toLocaleString() + 'đ';


    // Hiển thị số lượng món hiện có trên icon giỏ hàng

    const cartCount = document.querySelector('.cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if (count == 0) {
        cartCount.style.display = 'none';
    } else {
        cartCount.style.display = 'block';
    }


}
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
$(document).ready(function() {


    var textInput = $('#inputshop').val();

    $(".b-popup").hide();


    if (localStorage.getItem('shoplistlocal')) {
        $('.list').html(localStorage.getItem('shoplistlocal'));
    }


    $("#market .items").on("click", function(e) {
        $('.count').css({ "display": "block" });
        var itemvalue = $(this).html();
        $('.list').append('<li    class="item">' + $(this).html() + '</li>');
        var shoplistlocal = $('.list').html();
        localStorage.setItem('shoplistlocal', shoplistlocal);
        return false;
    });


    $(".list").on("click", ".item", function() {
        $(this).remove();
        $('.count').css({ "display": "block" });
        var itemlength = $(".app-body li").length;
        $('.count').text(itemlength);
        var shoplistlocal = $('.list').html();
        localStorage.setItem('shoplistlocal', shoplistlocal);
        return false;
    });


    $(".closepopup").click(function() {
        $(".b-popup").hide(200);
    });


    $(".openpopup").click(function() {
        if ($('.item').is('li')) {
            $(".b-popup").fadeIn(200);
        } else {
            $(".tooltipshop2").animate({ marginLeft: "20px", easing: "easeout", opacity: "1" }, 300);
            $(".tooltipshop2").delay(900).animate({ opacity: "0", marginLeft: "-90px" });
        }
    });
    $("#send").click(function() {
        var itemname = $("#inputname").val();
        var itememail = $("#inputemail").val();
        var itemtel = $("#inputtel").val();
        var shopbox = $(".app-body").html();
        $.ajax({
            url: "sendmessege.php",
            type: "post",
            dataType: "json",
            data: {
                "itemname": user_name,
                "itememail": user_email,
                "itemtel": user_comment,
                "shopbox": user_money
            },
            success: function() {
                alert("Ваше сообщение отправлено!");

            }
        });
    });

    $('.closewindow').click(function() {
        $('.app').fadeOut(500);
    });
    $('#tray').click(function() {
        $('.app').fadeIn(500);
    });


    $('.items').click(function() {
        var itemlength = $(".app-body li").length;
        $('.count').text(itemlength);
    });


    $(".openpopup2").click(function() {
        window.localStorage.clear();
        $('.list').children().remove();
        $('.count').hide();
        return false;
    });
});
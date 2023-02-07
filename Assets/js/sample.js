/*Creating index page*/

var clothingCard = document.getElementById('clothing-card');
var isAccessory = document.getElementById('accessories-card');

function generateCard(data) {
    /* <div class="card" id="1">
        <a href="">
            <img class='img' src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="Men Navy Blue Solid Sweatshirt">
            <div class="details">
                <h3 class='name' >Men Navy Blue Solid Sweatshirt</h3>
                <h4 class='brand'>United Colors of Benetton</h4>
                <h5 class='price'>Rs 2599</h5>
            </div>
        </a>
    </div>  */


    var card = document.createElement('div');
    card.className = 'card';

    var productLink = document.createElement('a');
    card.appendChild(productLink);
    productLink.href = './sampleproduct.html?id=' + data.id;

    var thumbnail = document.createElement('img');
    thumbnail.src = data.preview;
    thumbnail.className = 'img';
    productLink.appendChild(thumbnail);

    var details = document.createElement('div');
    details.className = 'details';
    productLink.appendChild(details);

    //Create a H3 element with TEXT-NODE NAME
    var newTitleElement = document.createElement("h3");
    newTitleElement.className = 'name';
    newTitleElement.innerHTML = data.name;
    details.appendChild(newTitleElement);

    var newBrandElement = document.createElement("h4");
    newBrandElement.className = 'brand';
    newBrandElement.innerHTML = data.brand;
    details.appendChild(newBrandElement);

    var newPriceElement = document.createElement("h5");
    newPriceElement.className = 'price';
    newPriceElement.innerHTML = data.price;
    details.appendChild(newPriceElement);


    if (data.isAccessory === false) {
        clothingCard.appendChild(card);

    } else if (data.isAccessory === true) {

        isAccessory.appendChild(card);

    }
    return card;
}
// for (i = 0; i <= productList.length; i++) {
//     generateCard(productList[i]);
// }

var productArr = [];

function renderCardGrid() {
    for (i = 0; i < productArr.length; i++) {
        generateCard(productArr[i]);

    }
}

xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
        productArr = JSON.parse(xhttp.responseText);
        // console.log(productArr);
        renderCardGrid();
    }

}
xhttp.send();

/*Creating product page*/

var productBigImg = document.getElementById('productImg');

var productName = document.getElementById("name");

// Product Brand
var productBrand = document.getElementById("brand");

// Product Price
var productPrice = document.getElementById("price");

// Product Description
var productDescription = document.getElementById("description");

// Product Preview Image 0
var photo0 = document.getElementById("img0");

// Product Preview Image 1
var photo1 = document.getElementById("img1");

// Product Preview Image 2
var photo2 = document.getElementById("img2");

// Product Preview Image 3
var photo3 = document.getElementById("img3");

// Product Preview Image 4
var photo4 = document.getElementById("img4");

// Product Preview Image 5
var photo5 = document.getElementById("img5");

var currentObj = null;
var addToCartBtn = document.get
var productData = [];

var pageId = window.location.search.split('=')[1];
// console.log(pageId);
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + pageId, function(responseText, status) {
    productData = responseText;
    currentObj = productData;
    // console.log('currentobj', currentObj);

    productBigImg.src = productData.preview;
    productName.innerHTML = productData.name;
    productBrand.innerHTML = productData.brand;
    productPrice.innerHTML = productData.price;
    productDescription.innerHTML = productData.description;
    photo0.src = productData.photos[0];
    photo1.src = productData.photos[1];
    photo2.src = productData.photos[2];
    photo3.src = productData.photos[3];
    photo4.src = productData.photos[4];



    photo0.onclick = function() {
        productBigImg.src = productData.photos[0];
    }
    photo1.onclick = function() {
        productBigImg.src = productData.photos[1];
    }
    photo2.onclick = function() {
        productBigImg.src = productData.photos[2];
    }
    photo3.onclick = function() {
        productBigImg.src = productData.photos[3];
    }
    photo4.onclick = function() {
        productBigImg.src = productData.photos[4];
    }
    $(document).on("click", ".previewImg img", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});

var addToCartBtn = document.getElementById('add-to-cart');
var cart = document.getElementById('cart-count');
var myCartData = [];
var cartInitialValue;

// if (localStorage.getItem('cart-count') == null) {
//     // localStorage.getItem('cart-count','0') 
// }
// console.log('cartcount ' + localStorage.getItem('cart-count'));
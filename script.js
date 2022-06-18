/* mobile */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) { 
        openDropdown.classList.remove('show');
		  }
	  }
  }
}

// foto slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} //tot hier foto slide

//add product to cart codes
let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name:'Illustratie op canvas',
    tag: 'canvas',
    price: 32,
    inCart: 0 
  },
  {
    name:'Illustratie op poster',
    tag: 'poster',
    price: 27,
    inCart: 0
  },
  {
    name:'Illustratie op pet',
    tag: 'pet',
    price: 24,
    inCart: 0
  }
];

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click',() => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers (){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers); //om een 'nummer' te laten zien ipv van 'string'
  if( productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1; //laat het aantal zien op menu header 
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1; 
  }
  
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems); 
  
  if(cartItems != null){
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
  }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost );

  if(cartCost != null) {
    cartCost = parseInt(cartCost); //convert string to number
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }


}

onLoadCartNumbers();

/* teller op winkel mand */
var a_parent =  document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			aitem.classList.add("active");
		})
})

dd_menu_a.forEach(function(dd_menu_item){

		dd_menu_item.addEventListener("click", function(){
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			dd_menu_item.classList.add("active");
		})
})


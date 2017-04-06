
var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.main-menu__toggle');
    
navMain.classList.remove('main-menu--no-js');

navToggle.addEventListener('click', function() 
	{
	if (navMain.classList.contains('main-menu--closed')) 
		{
		navMain.classList.remove('main-menu--closed');
		navMain.classList.add('main-menu--opened');
		} else 
			{
			navMain.classList.add('main-menu--closed');
			navMain.classList.remove('main-menu--opened');
			}
	});

var open = document.querySelector(".making__btn, .promo__btn");
var close = document.querySelector(".add__btn");
var overlay = document.querySelector(".add__overlay");
var popup = document.querySelector(".popup");

open.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.add("popup__on");
});

close.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("popup__on");
});
overlay.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("popup__on");
});


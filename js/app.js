
let iconMenu = document.querySelector('.navig-menu__icon')
let menuBody = document.querySelector('.navig');
let mainLang = document.querySelector('.main-name__lang');
if(iconMenu){
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		mainLang.classList.toggle('_active');
	})
}

/*==========================*/ 

let menuLinks = document.querySelectorAll('.menu-link[data-goto]');

function menuLinkCl(){
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", oneMenuLinkClick);
})
	function oneMenuLinkClick (e){
		const menuLink = e.target;
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + document.querySelector('header').offsetHeight;

		if (iconMenu.classList.contains('_active')){
			document.body.classList.remove('_lock')
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
			mainLang.classList.remove('_active');
		}

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});
	}
}
menuLinkCl()
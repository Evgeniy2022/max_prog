
let iconMenu = document.querySelector('.navig-menu__icon')
const menuBody = document.querySelector('.navig');
if(iconMenu){
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

/*==========================*/ 

let menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if(menuLinks.length > 0){
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", oneMenuLinkClick);
})
	function oneMenuLinkClick (e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
		}
	}
}
var items = document.querySelectorAll('.items');

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click', function(e) {

	for (var i = 0; i < items.length; i++) {
		items[i].classList.remove('active');
	}	
	var sub_menu = document.querySelectorAll('.sub_menu');
	
	for (var i = 0; i < sub_menu.length; i++) {
		sub_menu[i].style.height = 0 + 'px';
	}

	var submenu = this.nextElementSibling;
	submenuHeight = this.nextElementSibling.clientHeight;
	var height = submenu.querySelector('.sub_menu div').clientHeight;

	if (submenuHeight == 0) {
		submenu.style.height = height + 'px';
		this.classList.add('active');
	}else {
		submenu.style.height = 0 + 'px';
		this.classList.remove('active');
	}
});
}

const nav = document.querySelector(".navegacion");
const menu_btn = document.querySelector(".hamburger");

menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    nav.classList.toggle("is-active");
})

document.querySelectorAll(".nav_links, .logo").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    nav.classList.remove("is-active");
}))

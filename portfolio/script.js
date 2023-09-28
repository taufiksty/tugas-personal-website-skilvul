const menuMobileOpen = document.getElementById('menu-mobile-open');
const menuMobileClose = document.getElementById('menu-mobile-close');
const menuMobile = document.getElementById('nav-mobile');

menuMobileOpen.addEventListener('click', () => {
	menuMobile.classList.toggle('hidden');
	menuMobileOpen.classList.toggle('hidden');
	menuMobileClose.classList.toggle('hidden');
});

menuMobileClose.addEventListener('click', () => {
	menuMobile.classList.toggle('hidden');
	menuMobileOpen.classList.toggle('hidden');
	menuMobileClose.classList.toggle('hidden');
});

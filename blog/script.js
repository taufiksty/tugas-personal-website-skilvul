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

document
	.querySelector('.blog-item')
	.addEventListener('click', () =>
		window.open(
			'https://dev.to/taufiksty/calculate-determinant-matrix-using-javascript-2cnc',
			'_blank',
		),
	);

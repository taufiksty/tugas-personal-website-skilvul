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

let i = 0;
const text = 'Taufik Satya';
let isCompleted = false;
let delayAfterCompleted = true;

function animationTypeWriter() {
	const nameElement = document.getElementById('name');
	const currText = nameElement.textContent;

	if (!isCompleted && i < text.length) {
		nameElement.textContent = currText + text.charAt(i);
		i++;
		setTimeout(animationTypeWriter, 150);
	} else if (isCompleted && i >= 0) {
		nameElement.textContent = currText.slice(0, -1);
		i--;
		setTimeout(animationTypeWriter, 75);
	} else {
		if (delayAfterCompleted) {
			delayAfterCompleted = false;
			setTimeout(animationTypeWriter, 300);
		} else {
			isCompleted = !isCompleted;
			delayAfterCompleted = true;
			setTimeout(animationTypeWriter, 100);
		}
	}
}

animationTypeWriter();

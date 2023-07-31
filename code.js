const navToggleBtn = document.querySelector('.nav-toggle');

const links = document.querySelector('.links');

navToggleBtn.addEventListener('click', () => {
	links.classList.toggle('show-links');
});

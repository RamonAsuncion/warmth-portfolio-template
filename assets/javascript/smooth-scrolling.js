//smooth scrolling

$(document).ready(function () {
	$('.contain-project a').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				900 
			);
		}
	});
});

$(document).ready(function () {
	$('footer a').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash2 = this.hash;
			$('html, body').animate(
				{
					scrollTop: 0, 
				},
				900 
			);
		}
	});
});

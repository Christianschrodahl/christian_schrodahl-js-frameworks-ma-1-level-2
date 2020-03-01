	$(document).ready(function () {
		setInterval(() => {
			var ActiveImg = $('.active');
			var nextImg = ActiveImg.next();
			(nextImg.length) ? nextImg.addClass('active'): $('.slider img').first().addClass('active');
			ActiveImg.removeClass('active');
		}, 2000)
	})

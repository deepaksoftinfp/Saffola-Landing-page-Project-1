				/* START PRODUCT JS */

		$('.product-slide').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
			autoplay: true,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});

		/* START PREPARATION JS */

		$('.preparation-slide').owlCarousel({
			loop: false,
			margin: 10,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

		/* START TESTIMONIAL JS */

		$('.testimonial-slide').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 3
		}
	}
});

		/* START RECIPES JS */

		$('.recipes-slide').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 3
		}
	}
});

/* START INSTA JS */
$('.instagram-slide').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2
		},
		600: {
			items: 2
		},
		1000: {
			items: 4
		}
	}
});
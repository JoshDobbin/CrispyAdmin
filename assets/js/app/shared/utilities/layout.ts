export class Layout {
	public fixWindowLayout() {
		//Get window height and the wrapper height
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		var sidebar_height = $(".sidebar").height();
		//Set the min-height of the content and sidebar based on the
		//the height of the document.
		if ($("body").hasClass("fixed")) {
			$(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
		} else {
			var postSetWidth: any;
			if (window_height >= sidebar_height) {
				$(".content-wrapper, .right-side").css('min-height', window_height - neg);
				postSetWidth = window_height - neg;
			} else {
				$(".content-wrapper, .right-side").css('min-height', sidebar_height);
				postSetWidth = sidebar_height;
			}
		}
	}
}
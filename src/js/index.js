"use strict";

(function(window, $) {
	$(document).ready(function() {
		var $w = $(window),
			$content = $('h1'),
			$img = $('img'),
			is;

		$w.on('resize', function() {
			var w = $w.width(),
				h = $w.height(),
				s = w/h;

			if (s > is) {
				$img.css({
					width: '100%',
					height: 'auto'
				});
			} else {
				$img.css({
					width: 'auto',
					height: '100%'
				});
			}
		});

		$img.on('load', function() {
			is = $img.width() / $img.height();
			$w.trigger('resize');
			console.log("LOL");
		});

		$.ajax({
			url: '/a/1/text?id=1',
			dataType: 'json',
			success: function(text) {
				$content.html(text.Content);
			}
		});

		$.ajax({
			url: '/a/1/image?id=1',
			dataType: 'json',
			success: function(image) {
				$img.attr('src', image.Content);
			}
		});
	});
})(this, this.jQuery);
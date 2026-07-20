(function () {
	'use strict';

	function loadVideo(button) {
		var wrapper = button.closest('.click-video');
		if (!wrapper || wrapper.dataset.loaded === 'true') return;

		var source = wrapper.dataset.videoSrc;
		if (!source) return;

		var iframe = document.createElement('iframe');
		iframe.src = source + (source.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1';
		iframe.title = wrapper.dataset.videoTitle || '项目演示视频';
		iframe.scrolling = 'no';
		iframe.frameBorder = '0';
		iframe.allow = 'autoplay; fullscreen; picture-in-picture';
		iframe.allowFullscreen = true;
		wrapper.dataset.loaded = 'true';
		wrapper.replaceChildren(iframe);
	}

	document.addEventListener('click', function (event) {
		var button = event.target.closest('.video-poster');
		if (button) loadVideo(button);
	});
}());

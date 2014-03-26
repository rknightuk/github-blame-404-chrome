var title = document.title;
var url = window.location.href;
if (title.indexOf("Page not found") != -1) {
	paths = window.location.href.split('/');
	paths[6] = 'HEAD';
	path = paths.join('/');
	window.location.href = path;
}

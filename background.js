var title = document.title;
var url = window.location.href;
if (title.indexOf("Page not found") != -1) {
	paths = window.location.href.split('/');
	if (paths[4] == 'InventoryBase') {
		replace = 'develop';	
	}
	else {
		replace = 'master';
	}
	paths[6] = replace;
	path = paths.join('/');
	window.location.href = path;
}
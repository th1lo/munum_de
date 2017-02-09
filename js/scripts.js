$(document).ready(function() {
	var path = window.location.pathname;
	console.log(path);
	$(document).languageDetection({
		languages   :   [
			{
				code : 'de',
				path : path+'de/index.html'
			},
			{
				code : 'en',
				path : path+'en/index.html',
				defaultLanguage : true
			}
		]
	});
});

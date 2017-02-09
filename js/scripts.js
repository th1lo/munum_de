$(document).ready(function() {
	$(document).languageDetection({
		languages   :   [
			{
				code : 'de',
				path : 'de/index.html'
			},
			{
				code : 'en',
				path : 'en/index.html',
				defaultLanguage : true
			}
		]		
	});
});
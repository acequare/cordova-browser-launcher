var exec = cordova.require('cordova/exec');

exports.open = function(url, successCallback, errorCallback) {
	exec(successCallback, errorCallback, "BrowserLauncher", "open", [url]);	
};
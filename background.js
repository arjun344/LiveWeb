console.log("From Background");

chrome.tabs.onActivated.addListener(tab => {
	console.log(tab);
	chrome.tabs.get(tab.tabId , current_tab_info => {

		console.log(current_tab_info.url);

		chrome.tabs.insertCSS(null,{file: './style.css'});
		chrome.tabs.executeScript(null,{file: './foreground.js'} , () => console.log("injected"));
	})
 
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

	sendResponse({message:'yo i got your message'});
	console.log(request.message);
	chrome.storage.local.get("data", value => {

		console.log(value);
	});

});

console.log("From Foreground");

const first = document.createElement('button');
first.innerText = 'Send Data';
first.id = 'first';

const second = document.createElement('button');
second.innerText = 'SHOUT OUT TO BACKEND';
second.id = 'second';

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click',() => {

	chrome.storage.local.set({"data":"123"});
	console.log("first clicked");
});

second.addEventListener('click',() => {

	chrome.runtime.sendMessage({message:"yo check the message"},res => console.log(res));
	console.log("second clicked");
});
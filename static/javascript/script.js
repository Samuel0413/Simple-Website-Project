let pElement = document.getElementById("target");

pElement.onclick = newStyle //register an event


function newStyle() {
	console.log('function call here')
	let newColor = '';
	let newFont = '';
	var element = document.getElementById('target'); //找到html中id为“target”那个tag
	element.style.color = "purple"; //对那个tag中style arrtribute 进行更改
	element.style.fontFamily = "impact";
}

function showMoreFunc() {
	console.log('function call here')
	let youtube = document.createElement("li");
	youtube.innerHTML = "<a href = 'https://www.youtube.com/'>Youtube</a>";

	let instagram = document.createElement("li");
	instagram.innerHTML = "<a href = 'https://www.instagram.com/'>Instagram</a>";

	let newline = document.createElement("br");

	document.getElementById("list").appendChild(youtube);
	document.getElementById("list").appendChild(newline);
	document.getElementById("list").appendChild(instagram);

	let text = document.getElementById("showMore");
	document.getElementById("div2").removeChild(text);

}

let media = document.getElementById("social-media");
let buttonShare = document.getElementById("share-button");

buttonShare.onclick = clickToshow

function clickToshow() {
	media.style.display = 'block';
	let button = document.getElementById("share-button");
	document.getElementById("div2").removeChild(button);
}


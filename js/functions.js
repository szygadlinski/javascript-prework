function printMessage(msg, className){
	let div = document.createElement('div');
	div.innerHTML = msg;
	div.className = className;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

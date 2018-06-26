var div = document.querySelector('#text');

div.onclick = function(){
    div.innerHTML = 'ура!';
    div.className = 'test';
    div.style.color = '#f00';
    div.style.fontSize = '30px';
}
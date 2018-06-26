var countClicks = 0;
document.getElementById('elem').onclick = function() {
  countClicks = countClicks + 1;

 alert('Меня кликнули ' + countClicks + ' раз(а)');
}
 

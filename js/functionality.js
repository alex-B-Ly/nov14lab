var deleteButtons = document.getElementsByClassName('remover');
var deleteLength = deleteButtons.length;

function remover(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

for(var i=0; i<=deleteLength; i++){
  deleteButtons[i].addEventListener('click', remover);
}


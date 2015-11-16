var deleteButtons = document.getElementsByClassName('remover');
var deleteLength = deleteButtons.length;

// Remove Row

function remover(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

for(var i=0; i < deleteLength; i++){
  deleteButtons[i].addEventListener('click', remover);
}

// Add Row

var adderButton = document.getElementById('adder');

function addRow(){
  var table = document.getElementById('customer-table');
  var firstName = document.getElementById('first-name-entry');
  var lastName = document.getElementById('last-name-entry');
  var email = document.getElementById('email-entry');


  var newRow = table.insertRow();
  newRow.className += 'customer';

  for(var i=0; i<4; i++){
    var td = document.createElement('td');

    if(i===0){
      td.textContent = firstName.value;
    }if(i===1){
      td.textContent = lastName.value;
    }if(i===2){
      td.textContent = email.value;
    }

    newRow.appendChild(td);
  }

  // TODO append newRow to length of table rows - 1

}

adderButton.addEventListener('click', addRow);


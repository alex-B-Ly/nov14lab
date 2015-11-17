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
  var customerTable = document.getElementById('customer-table');
  var firstName = document.getElementById('first-name-entry');
  var lastName = document.getElementById('last-name-entry');
  var email = document.getElementById('email-entry');


  var newRow = customerTable.insertRow(customerTable.rows.length - 1);
  newRow.className += 'customer';

  for(var i=0; i<4; i++){
    var td = document.createElement('td');
    var delButton = document.createElement('button');

    if(i===0){
      td.textContent = firstName.value;
    }if(i===1){
      td.textContent = lastName.value;
    }if(i===2){
      td.textContent = email.value;
    }if(i===3){
      delButton.className += 'btn btn-default remover';
      delButton.textContent = 'X';
      td.appendChild(delButton);
      delButton.addEventListener('click', remover);
    }

    newRow.appendChild(td);
  }

    (function(){
      firstName.value = '';
      lastName.value = '';
      email.value = '';
    })();

}

adderButton.addEventListener('click', addRow);

// Random Second Add function


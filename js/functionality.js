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
  var emailValue = email.value;

  if(!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(emailValue)){
    alert('your email is not valid');
    return;
  }

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

(function(){
  var customerTable = document.getElementById('customer-table');

  setInterval(function(){
  var randomRow = customerTable.insertRow(1);
  randomRow.className += 'customer';

    for(var i=0; i<4; i++){
    var td = document.createElement('td');
    var delButton = document.createElement('button');

      if(i===0){
        td.textContent = 'I am';
      }if(i===1){
        td.textContent = 'a randow';
      }if(i===2){
        td.textContent = 'row';
      }if(i===3){
        delButton.className += 'btn btn-default remover';
        delButton.textContent = 'X';
        td.appendChild(delButton);
        delButton.addEventListener('click', remover);
      }
      randomRow.appendChild(td);
    }
  }, (Math.round(Math.random()*(10-5)+5))*1000);
})();
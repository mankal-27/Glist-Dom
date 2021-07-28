var form = document.getElementById('item-form');
var itemList = document.getElementById('item-body');

form.addEventListener('submit', addItems);

var gtotal = 0;


function addItems(item){
    item.preventDefault();

    var itemName = document.getElementById('item-name').value;
    var itemQuantity = document.getElementById('item-quantity').value;
    var itemAmount = document.getElementById('item-amount').value;
    var grandTotal = document.getElementById('Gtotal');

    var citemName = document.createElement('td');
    var citemQuantity = document.createElement('td')
    var citemAmount = document.createElement('td');
    var ctotal = document.createElement('td');
    var deleteButton = document.createElement('td');
    var editButton = document.createElement('td');
    
    citemName.textContent = itemName;
    citemQuantity.textContent = itemQuantity;
    citemAmount.textContent = itemAmount;
    ctotal.textContent = itemQuantity * itemAmount;
    deleteButton.textContent = "Remove";
    deleteButton.style.background = "cyan";
    editButton.textContent = "Edit";
    editButton.style.background = "cyan";
    
    var displayItemTable = document.createElement('tr');

   
    displayItemTable.appendChild(citemName);
    displayItemTable.appendChild(citemQuantity);
    displayItemTable.appendChild(citemAmount);
    displayItemTable.appendChild(ctotal);
    displayItemTable.appendChild(deleteButton);
    displayItemTable.appendChild(editButton);

    itemList.appendChild(displayItemTable);

    gtotal = gtotal + (itemQuantity * itemAmount);
    grandTotal.textContent = "Grand Total : "+ gtotal.toFixed(2);

    deleteButton.addEventListener('click', () =>{
        gtotal -= displayItemTable.children[3].textContent;
        
        itemList.removeChild(displayItemTable);
        grandTotal.textContent = "Grand Total : "+ gtotal.toFixed(2);
    })
}


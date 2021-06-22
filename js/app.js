'use strict';

let table = document.getElementById('table');
let form = document.getElementById('form');
let arrOfObj = [];
let headearArr = ['name', 'category', 'quantity', 'price', 'remove'];
let ii=0;
//let total=document.getElementById('total');

form.addEventListener('submit', handleSubmition);

table.addEventListener('click',handleRemove);



function handleRemove(event){

if(event.target.textContent='x'){

    table='';
    arrOfObj.splice(event.target.id,1);
}
renderHeader();
renderAgain();

}





function handleSubmition(event) {

    event.preventDefault();

    let newitemName = event.target.itemName.value;
    let newcategory = event.target.category.value;
    let newquantity = event.target.quantity.value;


    let newWishList = new WishList(newitemName, newcategory, newquantity);
    newWishList.renderTable();

    localStorage.setItem('list', JSON.stringify(arrOfObj));
}


function WishList(itemName, category, quantity) {

    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.price = generateRandomPrice( quantity);
    this.total= calculateTotal();
    arrOfObj.push(this);

}

function renderHeader() {

    let firstRow = document.createElement('tr');

    for (let i = 0; i < headearArr.length; i++) {

        let th1 = document.createElement('th');
        th1.textContent = headearArr[i];

        firstRow.appendChild(th1);

    }
    table.appendChild(firstRow);

}





WishList.prototype.renderTable = function () {

    let secondRow = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = this.itemName;

    let td2 = document.createElement('td');
    td2.textContent = this.category;

    let td3 = document.createElement('td');
    td3.textContent = this.quantity;

    let td4 = document.createElement('td');
    td4.textContent = this.price;

    let td5 = document.createElement('td');
     td5.textContent = `Total: ${this.total}`;


     let td6 = document.createElement('td');
        td6.textContent = 'x';
        td6.id=ii++;

    secondRow.appendChild(td1);
    secondRow.appendChild(td2);
    secondRow.appendChild(td3);
    secondRow.appendChild(td4);
    secondRow.appendChild(td6);
    table.appendChild(td5);

    table.appendChild(secondRow);

}


function checkLS() {

    if (localStorage.getItem('list')) {
        arrOfObj = JSON.parse(localStorage.getItem('list'));

    }

}



function renderAgain() {
    for (let i = 0; i < arrOfObj.length; i++) {

        let secondRow = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = arrOfObj[i].itemName;

        let td2 = document.createElement('td');
        td2.textContent = arrOfObj[i].category;

        let td3 = document.createElement('td');
        td3.textContent = arrOfObj[i].quantity;

        let td4 = document.createElement('td');
        td4.textContent = arrOfObj[i].price;

        let td6 = document.createElement('td');
        td6.textContent = 'x';
        td6.id=i;

        
        secondRow.appendChild(td1);
        secondRow.appendChild(td2);
        secondRow.appendChild(td3);
        secondRow.appendChild(td4);
        secondRow.appendChild(td6);
        table.appendChild(secondRow);
        
    }
    
    let td5 = document.createElement('td');
    td5.textContent = ` Total ${arrOfObj.total}`;
    table.appendChild(td5);
}

function generateRandomPrice( quantity){
    return Math.floor(Math.random() * (1000 - 500) + 500) *  quantity;
}

function calculateTotal(){
    
    let total=0;
    for(let i=0; i<arrOfObj.length; i++){
        
        total= total + arrOfObj[i].price;
    }
    return total;

}

renderAgain();
checkLS();
renderHeader();
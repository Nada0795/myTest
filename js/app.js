
'use strict';

let form = document.getElementById('taskForm');

form.addEventListener('submit',handle);

let arrTask=[];
let arrDate=[];


function handle(event){

event.preventDefault();

let task=event.target.we.value;
let date=event.target.de.value;

arrTask.push(task);
arrDate.push(date);

}

function Combine(task,date){

this.arrTask=[];
this.arrDate=[];
arrTask.push.(task);
arrDate.push(date);


}


function renderlist(){
    var container = document.getElementById('list');
    var ulel=document.createElement('ul');
    container.appendChild(ulel);
    var liel=document.createElement('li')
    ulel.appendChild(liel)
    for (var i = 0; i < arrayWhat.length; i++) {
        
        liel.textContent=`${i+1}. ${arrayWhat[i]}`
        var pel=document.createElement('p')
        liel.appendChild(pel)
        liel.setAttribute('id','mel')
        pel.textContent=arraydate[i]
        pel.setAttribute('id','pel')
        

    }



// let std1=new Combine(reading,1/11/2021);
// let std2=new Combine(writing,4/11/2021);
// let std3=new Combine(swimming,8/11/2021);

function save1(){
let save1=JSON.stringify(arrTask)
localStorage.setItem('Task',save1);
}

function save2(){

let save2= JSON.stringify(arrDate)
localStorage.setItem('Date',save2);

}


function get1(){
let save1=localStorage.getItem('Task');
if(JSON.parse(save1)!==null){
arrTask=JSON.parse(save1);

}

}



function get2(){

let save2=localStorage.getItem('arrDate');

if(JSON.parse(save2)!==null){

arrDate=JSON.parse(save2);

}


}




save1();
save2();
renderlist();
get1();
get2();
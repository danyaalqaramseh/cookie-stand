'use strict'


let workingHours=[ ];


let seattle =  { 
    min: 0,
    max: 0 , 
    avg: 0 ,



    getmin: function () {    
            this.min =Math.min(...this.workingHours);
         },
    getmax: function () {    
        this.max = Math.max(...this.workingHours); },

        getWorking : function getworkingHours(){
                debugger;
            for (let index = 0; index <13; index++) {
               
                this.workingHours[index] = getRandomNumber(1, 500);
            }

        }

}
console.log(workingHours);

const hours=[ 6  ,7 , 8 , 9 , 10 , 11 , 12 , 1 , 2 , 3 , 4 ,5 , 6 , 7]; 
const container = document.getElementById('main');
const ulEl=document.createElement('ul');
container.appendChild(ulEl);
const liEl=document.createElement('li');
ulEl.appendChild(liEl);

for (let index = 0; index < workingHours.length; index++) {
   let liEl = document.createElement('li');
    ulEl.appendchild(liEl);
    liEl.contenttext = hours[index]+'am ' + workingHours[index] + ' cookies';
    
}




 


function getRandomNumber(min, max) {


    return Math.floor(Math.random() * (max - min + 1) + min);
}

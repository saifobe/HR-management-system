"use strict";

function myImage(){
    const image = new Image(200, 200);
    image.src = "https://via.placeholder.com/200";
    return image;
}

function getRandomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
  }

  function percentageCalc(num, per)
{
  return (num/100)*per;
}

function fourDigitUniqueNumber(){
    var a = Math. floor(1000 + Math. random() * 9000);
     //a = a. substring(-2);
     return a;

}


function employeeInfo(fullName,department,level,image) {
    this.employeeID = fourDigitUniqueNumber();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.calculateSalary();
}

employeeInfo.prototype.calculateSalary = function(){
    switch(this.level){
        case "Junior" :
            this.salary = getRandomArbitrary(500,1000);
            return this.salary
            break;
            
        case "Mid-Senior" :
            this.salary = getRandomArbitrary(1000,1500);
            return this.salary
            break;

        case "Senior" :
            this.salary = getRandomArbitrary(1500,2000);
            return this.salary
            break;
    }
}

employeeInfo.prototype.render = function(){

    const container = document.getElementById('myEmployee');
    console.log(container);


    const newDiv = document.createElement('div');
    container.appendChild(newDiv);

    newDiv.classList.add("card");

    const imgEl = document.createElement('img');
    newDiv.appendChild(imgEl);
    imgEl.setAttribute('src',this.image);
    /*imgEl.width = "200";
    imgEl.height = "200";*/

    imgEl.classList.add("userImg")

    const empName = document.createElement('h4');
    newDiv.appendChild(empName);
    empName.textContent = `Name: ${this.fullName} `;

    const empID = document.createElement('h4');
    newDiv.appendChild(empID);
    empID.textContent = `ID: ${this.employeeID}`;

    const empDepartment = document.createElement('h4');
    newDiv.appendChild(empDepartment);
    empDepartment.textContent = `Department: ${this.department} `;

    const empLevel = document.createElement('h4');
    newDiv.appendChild(empLevel);
    empLevel.textContent = `Level: ${this.level}`;

    //const hrEl = document.createElement('hr');
    //newDiv.appendChild(hrEl);


}

employeeInfo.prototype.calculateNetSalary = function(){
    let x = percentageCalc(this.calculateSalary,7.5);
    this.salary = this.calculateSalary - x;
    return this.salary;
    
    }

 /*   employeeInfo.prototype.render = function() {
        document.write(`Name:  ${this.fullName} <br> `);
        document.write(`Employee ID:  ${this.employeeID} <br> `);
        document.write(`Department:  ${this.department} <br> `);
        document.write(`Level:  ${this.level} <br>`);
        document.write(`Salary:  ${this.salary} <br><br><br><br><br>`);
    }*/

   /* let ghazi = new employeeInfo(1000,"Ghazi Samer","Administration","Senior");
    let lana = new employeeInfo(1001,"Lana Ali","Finance","Senior");
    let tamara = new employeeInfo(1002,"Tamara Ayoub","Marketing","Senior");
    let safi = new employeeInfo(1003,"Safi Walid","Administration","Mid-Senior");
    let omar = new employeeInfo(1004,"Omar Zaid","Development","Senior");
    let rana = new employeeInfo(1005,"Rana Saleh","Administration","Junior");
    let hadi = new employeeInfo(1006,"Hadi Ahmad","Finance","Mid-Senior");

    

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();*/

//Events

let newEmployee = document.getElementById("employeeForm");

newEmployee.addEventListener('submit',addNewEmployee);
   
function addNewEmployee(event){
    event.preventDefault();

    let imgPath = event.target.imgUrl.value;
    let employeeFullName = event.target.name.value;
    let employeeDep = event.target.depart.value;
    let employeeLevel = event.target.lev.value;

    let info = new employeeInfo(employeeFullName,employeeDep ,employeeLevel,imgPath);
    info.render();
}
    

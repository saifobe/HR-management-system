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


function employeeInfo(employeeID, fullName,department,level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = myImage();
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

employeeInfo.prototype.calculateNetSalary = function(){
    let x = percentageCalc(this.calculateSalary,7.5);
    this.salary = this.calculateSalary - x;
    return this.salary;
    
    }

    employeeInfo.prototype.render = function() {
        document.write(`Name:  ${this.fullName} <br> `);
        document.write(`Employee ID:  ${this.employeeID} <br> `);
        document.write(`Department:  ${this.department} <br> `);
        document.write(`Level:  ${this.level} <br>`);
        document.write(`Salary:  ${this.salary} <br><br><br><br><br>`);
    }

    let ghazi = new employeeInfo(1000,"Ghazi Samer","Administration","Senior");
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
hadi.render();



   

    

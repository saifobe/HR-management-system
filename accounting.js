"use strict";
let myEmployeeArr = [];

function render() {

    const table = document.getElementById('employeeTable');
    let data = getDepData();
    for (let i = 0; i < data.length; i++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        const tableDataDep = document.createElement('td');
        tableRow.appendChild(tableDataDep);
        tableDataDep.textContent = data[i].depName;

        const tableDataNum = document.createElement('td');
        tableRow.appendChild(tableDataNum);
        tableDataNum.textContent = data[i].num;

        const tableDataTot = document.createElement('td');
        tableRow.appendChild(tableDataTot);
        tableDataTot.textContent = data[i].salary;

        const tableDataAvg = document.createElement('td');
        tableRow.appendChild(tableDataAvg);
        tableDataAvg.textContent = data[i].avgSalary;

    }

}



function getEmployee() {
    let jsonArr = localStorage.getItem("allEmployees");
    myEmployeeArr = JSON.parse(jsonArr);

    if (myEmployeeArr == null) //localstorage is empty
    {
        myEmployeeArr = [];
    }

    console.log(myEmployeeArr);
}

getEmployee();

function getDepData() {
    let ad = {
        depName: "administration",
        num: 0,
        salary: 0,
        avgSalary: 0
    }

    let fin = {
        depName: "finance",
        num: 0,
        salary: 0,
        avgSalary: 0
    }

    let mark = {
        depName: "marketing",
        num: 0,
        salary: 0,
        avgSalary: 0
    }

    let deve = {
        depName: "development",
        num: 0,
        salary: 0,
        avgSalary: 0
    }



    for (let i = 0; i < myEmployeeArr.length; i++) {
        let dep = myEmployeeArr[i].department;

        switch (dep) {
            case "administration":
                ad.num++;
                ad.salary += myEmployeeArr[i].salary;
                ad.avgSalary = ad.salary / ad.num
                break;

            case "finance":
                fin.num++;
                fin.salary += myEmployeeArr[i].salary;
                fin.avgSalary = fin.salary / fin.num
                break;

            case "marketing":
                mark.num++;
                mark.salary += myEmployeeArr[i].salary;
                mark.avgSalary = mark.salary / mark.num
                break;

            case "development":
                deve.num++;
                deve.salary += myEmployeeArr[i].salary;
                deve.avgSalary = deve.salary / deve.num
                break;



        }
    }
    let total = {
        depName: "total",
        num: ad.num + deve.num + fin.num + mark.num,
        salary:ad.salary + deve.salary + fin.salary + mark.salary, 
        avgSalary:(ad.salary + deve.salary + fin.salary + mark.salary) / (ad.num + deve.num + fin.num + mark.num ) 
    }

    return [ad, fin, mark, deve,total];
}

render();

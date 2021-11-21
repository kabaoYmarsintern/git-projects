/* 
Create a class called Employee with following fields
- empName
- empId
- designation
- salary
All fields should be private and can be accessible only through getters and setters. do a check for the salary field, if salary is less than 1000 then don't allow it to set.

*/

class employee  {
    #empName;
    #empId;
    #designation
    #salary
    constructor(empName, empId, designation, salary) {
        this.#empName = empName;
        this.#empId = empId;
        this.#designation = designation;
        this.#salary = salary;
    }
    get empName() {
        return this.#empName;
    }
    set empName(name) {
        this.#empName = name;
    }
    get empId() {
        return this.#empId;
    }
    set empId(id) {
        this.#empId = id;
    }
    get designation() {
        return this.#designation;
    }
    set designation(designation) {
        this.#designation = designation;
    }
    get salary() {
        return this.#salary;
    }
    set salary(salary) {
        this.#salary = salary;
    }
    
    set salary(salary) {
        if(salary > 1000) {
            this.#salary = salary;
            console.log("set salary");
        } else {
            throw new Error();
        }
    }

}

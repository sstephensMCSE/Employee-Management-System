# 



# Project Title : Employee Management System

This weeks assignment is built entirely from scratch. It has a database with three tables, and javascript node engine that runs the application.  

## Installation
install node.js, run npm init, run npm i.
I use npm install to install the modules inquirer, mysql

**Inquirer Main Menu

<img src="https://github.com/sstephensMCSE/Employee-Management-System/blob/main/assets/mainmenu.jpg" width="500" title="mainmenu">

## Project Overview
   This is reminiscent of an old school Employee Management System. The challenge was to create an full-stack application from scratch. 
   Since the project is not hosted, I will include screenshots, and GIF style images to demonstrate the result.
   The hardest part was joining all the tables for the Employee View. I used the MySQL Workbench to troubleshoot the query until it was ready for the backend code.
   
   This website was very helpful in understanding how to join multiple tables: https://learnsql.com/blog/how-to-join-3-tables-or-more-in-sql/
   
   **Final SQL Query for the Employee-Role-Department Join
   ```
   USE employee_DB;
   SELECT employee.first_name, employee.last_name, department.name, role.title, role.salary
   AS Department
      FROM employee
         JOIN role 
            ON employee.role_id = role.id 
         JOIN department 
            ON role.department_id = department.id 
   ORDER BY employee.id;
   ```

## Psuedo Code

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

Build arrays to represent the selection options:
  * Add departments, roles, employees
  * View departments, roles, employees
  * Update employee roles - TODO.


Use inquirer to interface with the user actions. 
  

## Technology
- Node JS
- inquirer
- mysql

## Demonstration

**Action GIF

<img src="https://github.com/sstephensMCSE/Employee-Management-System/blob/main/assets/action.gif" width="500" title="action">


**Add Department

<img src="https://github.com/sstephensMCSE/Employee-Management-System/blob/main/assets/add_department.jpg" width="500" title="adddepartment">


**Add Role

<img src="https://github.com/sstephensMCSE/Employee-Management-System/blob/main/assets/add_role.jpg" width="800" title="addrole">


**Add Employee

<img src="https://github.com/sstephensMCSE/Employee-Management-System/blob/main/assets/add_employee.jpg" width="800" title="addemployee">

